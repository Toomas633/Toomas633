<template>
	<v-app :style="rootStyle">
		<AppNavbar />
		<v-main ref="mainElement" class="pb-12">
			<router-view />
			<CookieConsent />
			<MessagePopup />
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import useThemeMixin from './helpers/themeMixin'

const mainElement = ref<HTMLElement>()
const hasScrollbar = ref(false)

const { checkThemeStorage } = useThemeMixin()

const rootStyle = computed(() => ({
	'--scrollbar-offset': hasScrollbar.value ? '1rem' : '0rem',
}))

onMounted(() => {
	checkThemeStorage()
	window.addEventListener('load', checkScrollbar)
	window.addEventListener('resize', checkScrollbar)
})

onBeforeUnmount(() => {
	window.removeEventListener('load', checkScrollbar)
	window.removeEventListener('resize', checkScrollbar)
})

function checkScrollbar() {
	if (mainElement.value) {
		hasScrollbar.value =
			// @ts-expect-error $el is present
			mainElement.value.$el.scrollHeight > mainElement.value.$el.clientHeight
	}
}
</script>
