<template>
	<CookieButton @reopen-selection="dialogVisible = true" />
	<CookieBanner
		v-if="bannerVisible"
		@update:visible="bannerVisible = $event"
		@show-selection="showSelection" />
	<CookieDialog
		:visible="dialogVisible"
		@update:visible="dialogVisible = $event" />
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import CookieButton from './cookies/CookieButton.vue'
import useCookieMixin from '@/helpers/cookieMixin'
import isBotUserAgent from '@/helpers/isBot'
import { useRouter } from 'vue-router'

const dialogVisible = ref(false)
const bannerVisible = ref(false)

const {
	consent,
	acceptAllCookies,
	declineCookies,
	removeAllCookies,
	readConsentCookie,
	isConsent,
} = useCookieMixin()

const isBot = isBotUserAgent()
const router = useRouter()

watch(
	() => router.currentRoute.value.fullPath,
	(route) => {
		if (
			route.includes('privacy') &&
			(bannerVisible.value || dialogVisible.value)
		) {
			bannerVisible.value = false
			dialogVisible.value = false
		} else {
			checkConsent()
		}
	},
	{ immediate: true }
)

onMounted(checkConsent)

function checkConsent() {
	if (isBot) {
		acceptAllCookies()
		return
	}

	const stored = readConsentCookie()
	if (!stored) {
		bannerVisible.value = true
		return
	}
	if (stored === 'acceptedAll') {
		acceptAllCookies()
		return
	}
	if (stored === 'declined') {
		declineCookies()
		return
	}
	if (stored && isConsent(stored)) {
		const { ads, analytics, userData } = stored
		consent.value = { necessary: true, ads, analytics, userData }
		globalThis.updateConsent(consent.value)
	} else {
		removeAllCookies()
		dialogVisible.value = true
	}
}

function showSelection() {
	bannerVisible.value = false
	dialogVisible.value = true
}
</script>
