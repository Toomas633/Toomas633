import { onMounted, onUnmounted, ref } from 'vue'

export default function useLoadingMixin(icons: string[]) {
	const loadingIcon = ref(icons[0])
	let iconIndex = 0
	let intervalId: number | null = null

	onMounted(() => {
		intervalId = window.setInterval(changeLoadingIcon, 100)
	})

	function changeLoadingIcon() {
		iconIndex = (iconIndex + 1) % icons.length
		loadingIcon.value = icons[iconIndex]
	}

	onUnmounted(() => {
		if (intervalId !== null) {
			clearInterval(intervalId)
		}
	})

	return { loadingIcon }
}
