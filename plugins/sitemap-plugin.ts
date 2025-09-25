import { writeFileSync, readFileSync } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import { glob } from 'glob'
import type { Plugin } from 'vite'

interface SitemapRoute {
	path: string
	priority: number
	lastmod: Date
}

function prettifyXml(xmlString: string): string {
	const PADDING = '  '

	const urlMatches = xmlString.match(/<url>.*?<\/url>/g) || []
	const sortedUrls = urlMatches.sort((a, b) => {
		const locA = a.match(/<loc>(.*?)<\/loc>/)?.[1] || ''
		const locB = b.match(/<loc>(.*?)<\/loc>/)?.[1] || ''
		return locA.localeCompare(locB)
	})

	const formattedUrls = sortedUrls
		.map((url) => {
			const loc = url.match(/<loc>(.*?)<\/loc>/)?.[1] || ''
			const lastmod = url.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] || ''
			const priority = url.match(/<priority>(.*?)<\/priority>/)?.[1] || ''

			return `${PADDING}<url>
${PADDING}${PADDING}<loc>${loc}</loc>
${PADDING}${PADDING}<lastmod>${lastmod}</lastmod>
${PADDING}${PADDING}<priority>${priority}</priority>
${PADDING}</url>`
		})
		.join('\n')

	const xmlDeclaration = xmlString.match(/<\?xml.*?\?>/)?.[0] || ''
	const urlsetStart = xmlString.match(/<urlset[^>]*>/)?.[0] || ''
	const urlsetEnd = '</urlset>'

	return `${xmlDeclaration}
${urlsetStart}
${formattedUrls}
${urlsetEnd}`
}

export function createSitemapPlugin(hostname: string): Plugin {
	return {
		name: 'sitemap-generator',
		generateBundle() {
			const extractRoutesFromFile = (
				filePath: string
			): Array<{ path: string; priority: number }> => {
				try {
					const content = readFileSync(filePath, 'utf-8')
					const routes: Array<{ path: string; priority: number }> = []

					const pathMatches = content.match(/path:\s*['"`]([^'"`]+)['"`]/g)
					if (pathMatches) {
						pathMatches.forEach((match) => {
							const path = match.replace(/path:\s*['"`]([^'"`]+)['"`]/, '$1')

							let priority = 0.5
							if (path === '/') priority = 1.0
							else if (path.startsWith('/projects/')) priority = 0.8
							else if (path.startsWith('/servers/')) priority = 0.7
							else if (path.startsWith('/demos/')) priority = 0.6
							else if (
								path.startsWith('/contact') ||
								path.startsWith('/donate')
							)
								priority = 0.6
							else if (path.startsWith('/archive/')) priority = 0.5

							routes.push({ path, priority })
						})
					}

					return routes
				} catch (error) {
					console.warn(`Failed to read router file ${filePath}:`, error)
					return []
				}
			}

			const routerFiles = glob.sync('./src/router/*.ts')
			const allRoutes: Array<SitemapRoute> = []

			routerFiles.forEach((file) => {
				const routes = extractRoutesFromFile(file)
				routes.forEach((route) => {
					allRoutes.push({
						...route,
						lastmod: new Date(),
					})
				})
			})

			const uniqueRoutes = allRoutes.filter(
				(route, index, self) =>
					index === self.findIndex((r) => r.path === route.path)
			)

			const sitemapStream = new SitemapStream({ hostname })

			uniqueRoutes.forEach((route) => {
				sitemapStream.write({
					url: route.path,
					priority: route.priority,
					lastmod: route.lastmod,
				})
			})

			sitemapStream.end()

			streamToPromise(sitemapStream)
				.then((data) => {
					const xmlString = data.toString()
					const prettifiedXml = prettifyXml(xmlString)
					writeFileSync('./dist/sitemap.xml', prettifiedXml)
				})
				.catch((err) => console.error('Sitemap generation failed:', err))
		},
	}
}
