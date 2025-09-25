import T6DroneView from '@/views/projects/T6DroneView.vue'
import RoboticArmView from '@/views/projects/RoboticArmView.vue'
import FileShareView from '@/views/projects/FileShareView.vue'
import PlexOrganizerView from '@/views/projects/PlexOrganizerView.vue'
import XMrigProxyView from '@/views/projects/XMrigProxyView.vue'
import { RouteRecord } from '@/types/route'

export const projectRoutes: Array<RouteRecord> = [
	{
		path: '/projects/t6-drone',
		component: T6DroneView,
		meta: {
			title: 'T6 Drone',
			description:
				'Explore my first drone project, built on a DJI F450 frame. Access all 3D and project files on GitHub and download STL files from Thingiverse. Check out images of the build process and final product.',
			icon: 'mdi-quadcopter',
		},
	},
	{
		path: '/projects/robotic-arm',
		component: RoboticArmView,
		meta: {
			title: 'Robotic Arm',
			description:
				'Discover my first Arduino robotic arm project, controlled via joystick input. Built with metal-geared servos for stability and performance, this project can lift up to 1kg. Access the code and 3D models on GitHub and Thingiverse, and view detailed images of the setup and wiring.',
			icon: 'mdi-robot-industrial',
		},
	},
	{
		path: '/projects/fileshare',
		component: FileShareView,
		meta: {
			title: 'FileShare',
			description:
				'FileShare is a user-friendly file sharing website with features like direct link generation, delete timers, and file previews. Easily upload files, set expiration times, and manage links through an intuitive admin page. Available on GitHub and Docker Hub, with detailed setup instructions for local and server environments.',
			icon: 'mdi-share-variant',
		},
	},
	{
		path: '/projects/plex-organizer',
		component: PlexOrganizerView,
		meta: {
			title: 'Plex Organizer',
			description:
				'Python-based utility designed to help manage and organize media files for Plex Media Server. It automates tasks such as renaming files, deleting unwanted files, moving directories, and cleaning up empty folders.',
			icon: 'mdi-file-document-arrow-right',
		},
	},
	{
		path: '/projects/xmrig-proxy',
		component: XMrigProxyView,
		meta: {
			title: 'XMRig Proxy',
			description: 'XMRig Proxy with web server for statistics.',
			icon: 'mdi-currency-btc',
		},
	},
]
