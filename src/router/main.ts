import { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import DonateView from '@/views/DonateView.vue'
import ToS from '@/views/ToS.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'

export const mainRoutes: Array<RouteRecordRaw> = [
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
