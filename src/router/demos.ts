import { RouteRecordRaw } from 'vue-router'
import StudentApiView from '@/views/demos/StudentApiView.vue'
import ContactApiView from '@/views/demos/ContactApiView.vue'
import ClickCounterView from '@/views/demos/ClickCounterView.vue'

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
	{
		path: '/demos/contact-api',
		component: ContactApiView,
		meta: {
			title: 'Contact API',
			description:
				'A minimal contact management system with a Java REST API, PostgreSQL storage, and a simple JavaScript UI for adding, viewing, and searching contacts.',
		},
	},
	{
		path: '/demos/click-counter',
		component: ClickCounterView,
		meta: {
			title: 'Click Counter',
			description: 'Simple demo click counter webpage',
		},
	},
]
