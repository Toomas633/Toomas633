import { createWriteStream } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'

const baseUrl = 'https://toomas633.com'

const routes = [
	{ path: '/', priority: 1.0, lastmod: new Date() },
	{
		path: '/projects/t6-drone',
		priority: 0.8,
		lastmod: new Date(),
	},
	{
		path: '/projects/robotic-arm',
		priority: 0.8,
		lastmod: new Date(),
	},
	{
		path: '/projects/file-organizer',
		priority: 0.7,
		lastmod: new Date(),
	},
	{
		path: '/projects/fileshare',
		priority: 0.7,
		lastmod: new Date(),
	},
	{
		path: '/servers/minecraft',
		priority: 0.7,
		lastmod: new Date(),
	},
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
