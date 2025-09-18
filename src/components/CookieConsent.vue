<template>
	<v-btn
		:class="isDesktop ? 'cookie-button-desktop' : 'cookie-button-mobile'"
		icon="mdi-cookie"
		position="fixed"
		location="bottom right"
		aria-label="Cookie button"
		color="primary"
		@click="reopenSelection" />
	<v-dialog v-model="visible" persistent max-width="650">
		<v-card v-model="visible" class="bg-background">
			<v-card-title class="text-h5 bg-black">
				<v-icon icon="mdi-cookie" /> Cookie Consent
			</v-card-title>
			<v-card-text>
				We use cookies to enhance your experience, analyze site traffic, and
				serve targeted advertisements. By continuing to use this website, you
				agree to our use of cookies.
			</v-card-text>
			<div
				v-if="showSelection"
				class="pl-6 pr-6 d-sm-flex align-content-space-between justify-center">
				<div class="pr-sm-4">
					<v-switch
						v-model="consent.necessary"
						color="green"
						label="Necessary Cookies"
						inset
						hide-details
						disabled />
					<v-switch
						v-model="consent.ads"
						color="green"
						label="Personalized Ads and Content"
						inset
						hide-details />
				</div>
				<div class="pl-sm-4">
					<v-switch
						v-model="consent.analytics"
						color="green"
						label="Analytics"
						inset
						hide-details />
					<v-switch
						v-model="consent.userData"
						color="green"
						label="Personal Data Usage"
						inset
						hide-details />
				</div>
			</div>
			<v-card-actions>
				<v-list-item class="w-100 pt-4">
					<template #prepend>
						<v-btn @click="showSelection = !showSelection">
							{{ showSelection ? 'Show less' : 'Show more' }}
						</v-btn>
					</template>
					<template #append>
						<v-btn
							color="green"
							@click="showSelection ? acceptSomeCookies() : acceptAllCookies()">
							I Accept
						</v-btn>
						<v-btn @click="declineCookies"> Decline </v-btn>
					</template>
				</v-list-item>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Consent } from '@/types/consent'
import useCookies from '@/helpers/useCookies'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

const visible = ref(false)
const showSelection = ref(false)
const consent = ref<Consent>({
	necessary: true,
	ads: false,
	analytics: false,
	userData: false,
})
const cookies = useCookies()

const acceptAllCookies = () => {
	cookies.set('cookieConsent', 'acceptedAll', '365d')
	visible.value = false
	showSelection.value = false
	window.updateConsent({
		necessary: true,
		ads: true,
		analytics: true,
		userData: true,
	} as Consent)
}

const declineCookies = () => {
	cookies.set('cookieConsent', 'declined', '365d')
	visible.value = false
	showSelection.value = false
	window.updateConsent({
		necessary: false,
		ads: false,
		analytics: false,
		userData: false,
	} as Consent)
}

const acceptSomeCookies = () => {
	cookies.set('cookieConsent', consent.value, '365d')
	visible.value = false
	window.updateConsent(consent)
}

const reopenSelection = () => {
	const cookie = cookies.get('cookieConsent')
	if (cookie === 'acceptedAll') {
		consent.value = {
			necessary: true,
			ads: true,
			analytics: true,
			userData: true,
		} as Consent
	} else if (isConsent(cookie)) {
		consent.value = cookie
	} else {
		consent.value = {
			necessary: true,
			ads: false,
			analytics: false,
			userData: false,
		} as Consent
	}
	visible.value = true
}

onMounted(() => {
	const cookie = cookies.get('cookieConsent')
	if (!cookie) {
		visible.value = true
	} else if (cookie === 'acceptedAll') {
		acceptAllCookies()
	} else if (isConsent(cookie)) {
		window.updateConsent(cookie)
	} else {
		cookies.remove('cookieConsent')
		visible.value = true
	}
})

function isConsent(obj: unknown): obj is Consent {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof (obj as Consent).necessary === 'boolean' &&
		typeof (obj as Consent).ads === 'boolean' &&
		typeof (obj as Consent).analytics === 'boolean' &&
		typeof (obj as Consent).userData === 'boolean'
	)
}
</script>
<style scoped lang="scss">
.cookie-button-desktop {
	right: calc(0.5rem + var(--scrollbar-offset)) !important;
	bottom: 0.5rem !important;
}

.cookie-button-mobile {
	right: 0.5rem !important;
	bottom: 0.5rem !important;
}
</style>
