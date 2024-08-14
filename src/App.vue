<template>
	<v-app :style="rootStyle">
		<AppNavbar />
		<v-main ref="mainElement">
			<router-view />
			<CookieConsent />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import CookieConsent from './components/CookieConsent.vue'
import { computed, onBeforeUnmount, onMounted, ref, VNodeRef } from 'vue'

const mainElement = ref<VNodeRef | null>(null)
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
			mainElement.value.$el.scrollHeight > mainElement.value.$el.clientHeight
	}
}
</script>
