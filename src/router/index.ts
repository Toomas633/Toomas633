import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FileOrganizerView from '@/views/archive/FileOrganizerView.vue'
import MinecraftView from '@/views/servers/MinecraftView.vue'
import { useHead } from '@vueuse/head'
import { projectRoutes } from './projects'
import { mainRoutes } from './main'
import { demoRoutes } from './demos'

const routes: Array<RouteRecordRaw> = [
	...mainRoutes,
	...projectRoutes,
	...demoRoutes,
	{
		path: '/servers/minecraft',
		component: MinecraftView,
		meta: {
			title: 'Minecraft server',
			description:
				'Explore the detailed status and statistics of your Minecraft server with our interactive dashboard. View server status, player information, and server statistics, and check out real-time server maps and plugin lists. Stay updated with live data and intuitive UI features.',
		},
	},
	{
		path: '/archive/file-organizer',
		component: FileOrganizerView,
		meta: {
			title: 'File Organizer',
			description:
				'Manage your files effortlessly with this versatile organizer script. Remove unwanted files, move specific files from subfolders, and delete empty folders. Ideal for Plex and torrent downloads, with customizable extensions. Find the code and setup instructions on GitHub.',
		},
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) return savedPosition
		return false
	},
})

const defaultTitle = "Toomas633's Dungeon"

router.beforeEach((to, _from, next) => {
	if (!routes.some((route) => route.path === to.path)) {
		const matchedRoute = routes.find(
			(route) => route.path.split('/')[2] === to.path.split('/')[2]
		)

		if (matchedRoute) {
			return next({ path: matchedRoute.path })
		}

		return next({ path: '/404' })
	}

	const defaultDescription = "Toomas633's projects homepage"

	document.title = to.meta.title?.toString() ?? defaultTitle

	useHead({
		meta: [
			{
				name: 'description',
				content: to.meta.description?.toString() ?? defaultDescription,
			},
		],
	})

	next()
})

router.afterEach((to) => {
	document.title = to.meta.title?.toString() ?? defaultTitle

	requestAnimationFrame(() => {
		const scroller = document.querySelector('.v-main') as HTMLElement | null

		if (to.hash) {
			const raw = to.hash.replace(/^#/, '')
			const needle = decodeURIComponent(raw).trim().toLowerCase()
			const target = document.getElementById(needle)
			if (target) {
				target.scrollIntoView({ behavior: 'smooth', block: 'start' })
				return
			}
		}

		if (scroller && typeof scroller.scrollTo === 'function') {
			scroller.scrollTo({ top: 0, left: 0 })
		} else {
			window.scrollTo({ top: 0, left: 0 })
		}
	})
})

export default router
