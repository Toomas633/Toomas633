import { createWriteStream } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'

const baseUrl = 'https://toomas633.com'
const projectPages = ['t6-drone', 'robotic-arm', 'fileshare']
const archivePages = ['file-organizer']
const serverPages = ['minecraft']

const routes = [
	{ path: '/', priority: 1.0, lastmod: new Date() },
	...getProjects(),
	...getServers(),
	...getArchived(),
	{
		path: '/contact',
		priority: 0.6,
		lastmod: new Date(),
	},
	{
		path: '/donate',
		priority: 0.6,
		lastmod: new Date(),
	},
	{ path: '/tos', priority: 0.5, lastmod: new Date() },
	{
		path: '/privacy',
		priority: 0.5,
		lastmod: new Date(),
	},
]

const sitemapStream = new SitemapStream({ hostname: baseUrl })

const writeStream = createWriteStream('./public/sitemap.xml')

routes.forEach((route) => {
	sitemapStream.write({
		url: route.path,
		priority: route.priority,
		changefreq: route.changefreq,
		lastmod: route.lastmod,
	})
})

sitemapStream.end()

streamToPromise(sitemapStream)
	.then((data) => writeStream.end(data))
	.catch((err) => console.error(err))

function getProjects() {
	const paths = []
	for (const page of projectPages) {
		paths.push({
			path: '/projects/' + page,
			priority: 0.8,
			lastmod: new Date(),
		})
	}
	return paths
}

function getArchived() {
	const paths = []
	for (const page of archivePages) {
		paths.push({
			path: '/archive/' + page,
			priority: 0.5,
			lastmod: new Date(),
		})
	}
	return paths
}

function getServers() {
	const paths = []
	for (const page of serverPages) {
		paths.push({
			path: '/servers/' + page,
			priority: 0.7,
			lastmod: new Date(),
		})
	}
	return paths
}
