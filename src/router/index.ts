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
import MinecraftView from '@/views/servers/MinecraftView.vue'
import { useHead } from '@vueuse/head'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: HomeView,
		meta: {
			title: "Toomas633's Dungeon",
			description:
				'Explore the projects and interests of a tech enthusiast and full-time developer. From robotics to 3D printing and find open-source work on GitHub and Thingiverse.',
		},
	},
	{
		path: '/projects/t6-drone',
		component: T6DroneView,
		meta: {
			title: 'T6 Drone',
			description:
				'Explore my first drone project, built on a DJI F450 frame. Access all 3D and project files on GitHub and download STL files from Thingiverse. Check out images of the build process and final product.',
		},
	},
	{
		path: '/projects/robotic-arm',
		component: RoboticArmView,
		meta: {
			title: 'Robotic Arm',
			description:
				'Discover my first Arduino robotic arm project, controlled via joystick input. Built with metal-geared servos for stability and performance, this project can lift up to 1kg. Access the code and 3D models on GitHub and Thingiverse, and view detailed images of the setup and wiring.',
		},
	},
	{
		path: '/projects/file-organizer',
		component: FileOrganizerView,
		meta: {
			title: 'File Organizer',
			description:
				'Manage your files effortlessly with this versatile organizer script. Remove unwanted files, move specific files from subfolders, and delete empty folders. Ideal for Plex and torrent downloads, with customizable extensions. Find the code and setup instructions on GitHub.',
		},
	},
	{
		path: '/projects/fileshare',
		component: FileShareView,
		meta: {
			title: 'FileShare',
			description:
				'FileShare is a user-friendly file sharing website with features like direct link generation, delete timers, and file previews. Easily upload files, set expiration times, and manage links through an intuitive admin page. Available on GitHub and Docker Hub, with detailed setup instructions for local and server environments.',
		},
	},
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
		path: '/contact',
		component: ContactView,
		meta: {
			title: 'Contact',
			description:
				'Get in touch through our contact page! Report issues, ask questions, or provide feedback via our contact form or directly by email. Choose from various project topics and send your message quickly and securely. Spam will be reported and banned.',
		},
	},
	{
		path: '/donate',
		component: DonateView,
		meta: {
			title: 'Donate',
			description:
				'Support my student projects with any amount you choose. Explore ways to contribute through Amazon, PayPal, or Bitcoin. Every donation helps fund my ongoing projects and future endeavors.',
		},
	},
	{
		path: '/tos',
		component: ToS,
		meta: {
			title: 'ToS',
			description:
				"Review the Terms of Service for Toomas633's Dungeon, effective from July 12, 2024. This page outlines your rights and responsibilities while using our website, including usage guidelines, intellectual property rights, and limitations of liability. For any questions, contact us directly via email.",
		},
	},
	{
		path: '/privacy',
		component: PrivacyPolicy,
		meta: {
			title: 'Privacy Policy',
			description:
				"Review Toomas633's Dungeon Privacy Policy, effective July 12, 2024. Learn how we collect, use, and protect your information when using our website and services. Understand our practices regarding cookies, data security, and your rights to manage your personal data. For any questions, contact us directly.",
		},
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const defaultTitle = "Toomas633's Dungeon"

router.beforeEach((to, from, next) => {
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
})

export default router
