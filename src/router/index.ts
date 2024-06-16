import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import DonateView from '@/views/DonateView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: "Toomas633's Dungeon",
		component: HomeView,
	},
	{
		path: '/projects/t6-drone',
		name: 'T6 Drone',
		component: HomeView,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: ContactView,
	},
	{
		path: '/donate',
		name: 'Donate',
		component: DonateView,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	document.title = to.name?.toString() ?? "Toomas633's Dungeon"
	next()
})

export default router
