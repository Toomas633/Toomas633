export interface Image {
	src: string
	title?: string
	alt: string
}

export interface LinkImage extends Image {
	href: string
	srcDark?: string
	width?: string
	height?: string
}
