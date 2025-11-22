import { onMounted, onUnmounted, ref } from 'vue'

export default function useLoadingMixin(icons: string[]) {
	const loadingIcon = ref(icons[0])
	let iconIndex = 0
	let intervalId: ReturnType<typeof globalThis.setInterval>

	onMounted(() => {
		intervalId = globalThis.setInterval(changeLoadingIcon, 100)
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
