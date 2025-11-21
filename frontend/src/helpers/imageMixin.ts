export default function useImageMixin() {
	function openImageInNewTab(image: string) {
		window.open(image, '_blank')
	}

	return {
		openImageInNewTab,
	}
}
