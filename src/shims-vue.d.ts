/* eslint-disable */
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

/* eslint-enable */
declare module '*.jpg' {
	const content: string
	export default content
}

declare module '*.png' {
	const content: string
	export default content
}

declare module '*.jpeg' {
	const content: string
	export default content
}

declare module '*.svg' {
	const content: string
	export default content
}

declare module '*.webp' {
	const content: string
	export default content
}
