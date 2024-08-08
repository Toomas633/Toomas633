import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import DonateView from '@/views/DonateView.vue'
import T6DroneView from '@/views/projects/T6DroneView.vue'
import RoboticArmView from '@/views/projects/RoboticArmView.vue'
import FileOrganizerView from '@/views/projects/FileOrganizerView.vue'
import FileShareView from '@/views/projects/FileShareView.vue'
import ToS from '@/views/ToS.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: "Toomas633's Dungeon",
		component: HomeView,
	},
	{
		path: '/projects/t6-drone',
		name: 'T6 Drone',
		component: T6DroneView,
	},
	{
		path: '/projects/robotic-arm',
		name: 'Robotic Arm',
		component: RoboticArmView,
	},
	{
		path: '/projects/file-organizer',
		name: 'File Organizer',
		component: FileOrganizerView,
	},
	{
		path: '/projects/fileshare',
		name: 'FileShare',
		component: FileShareView,
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
	{
		path: '/tos',
		name: 'ToS',
		component: ToS,
	},
	{
		path: '/privacy',
		name: 'Privacy Policy',
		component: PrivacyPolicy,
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
