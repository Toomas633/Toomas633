function openImageInNewTab(image: string) {
	globalThis.open(image, '_blank')
}

export default function useImageMixin() {
	return {
		openImageInNewTab,
	}
}
