import T6DroneView from '@/views/projects/T6DroneView.vue'
import RoboticArmView from '@/views/projects/RoboticArmView.vue'
import FileShareView from '@/views/projects/FileShareView.vue'
import PlexOrganizerView from '@/views/projects/PlexOrganizerView.vue'

export const projectRoutes = [
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
		path: '/projects/fileshare',
		component: FileShareView,
		meta: {
			title: 'FileShare',
			description:
				'FileShare is a user-friendly file sharing website with features like direct link generation, delete timers, and file previews. Easily upload files, set expiration times, and manage links through an intuitive admin page. Available on GitHub and Docker Hub, with detailed setup instructions for local and server environments.',
		},
	},
	{
		path: '/projects/plex-organizer',
		component: PlexOrganizerView,
		meta: {
			title: 'Plex Organizer',
			description: 'Plex Organizer.',
		},
	},
]
