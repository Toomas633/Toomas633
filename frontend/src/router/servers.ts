import { RouteRecord } from '@/types/route'
import MinecraftView from '@/views/servers/MinecraftView.vue'

export const serversRoutes: Array<RouteRecord> = [
	{
		path: '/servers/minecraft',
		component: MinecraftView,
		meta: {
			title: 'Minecraft server',
			description:
				'Explore the detailed status and statistics of your Minecraft server with our interactive dashboard. View server status, player information, and server statistics, and check out real-time server maps and plugin lists. Stay updated with live data and intuitive UI features.',
			icon: 'mdi-minecraft',
		},
	},
]
