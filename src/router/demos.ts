import { RouteRecordRaw } from 'vue-router'
import StudentApiView from '@/views/demos/StudentApiView.vue'

export const demoRoutes: Array<RouteRecordRaw> = [
	{
		path: '/demos/student-api',
		component: StudentApiView,
		meta: {
			title: 'Student API',
			description:
				'This project is a simple Node.js API built with TypeScript and Express. It provides CRUD operations for managing student data.',
		},
	},
]
