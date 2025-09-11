<template>
	<v-app :style="rootStyle">
		<AppNavbar />
		<v-main ref="mainElement" :class="isDesktop ? 'desktop' : 'mobile'">
			<router-view />
			<CookieConsent />
			<MessagePopup />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

const mainElement = ref<HTMLElement>()
const hasScrollbar = ref(false)

const rootStyle = computed(() => ({
	'--scrollbar-offset': hasScrollbar.value ? '1rem' : '0rem',
}))

onMounted(() => {
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
