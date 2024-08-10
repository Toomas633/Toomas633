<template>
	<v-dialog v-model="visible" persistent max-width="600">
		<v-card v-model="visible" class="bg-background">
			<v-card-title class="text-h5 bg-black">
				<v-icon icon="mdi-cookie" /> Cookie Consent
			</v-card-title>
			<v-card-text>
				We use cookies to enhance your experience, analyze site traffic, and
				serve targeted advertisements. By continuing to use this website, you
				agree to our use of cookies.
			</v-card-text>
			<v-card-actions
				v-if="showSelection"
				class="justify-space-between pl-6 pr-8">
				<v-switch v-model="consent.adStorage" color="green" label="Ads" inset />
				<v-switch
					v-model="consent.userData"
					color="green"
					label="User data"
					inset />
				<v-switch
					v-model="consent.personalization"
					color="green"
					label="Personalization"
					inset />
				<v-switch
					v-model="consent.analytics"
					color="green"
					label="Analytics"
					inset />
			</v-card-actions>
			<v-card-actions>
				<v-list-item class="w-100">
					<template #prepend>
						<v-btn @click="showSelection = true"> Show more </v-btn>
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

const visible = ref(false)
const showSelection = ref(false)
const consent = ref<Consent>({
	adStorage: false,
	userData: false,
	personalization: false,
	analytics: false,
})
const cookies = useCookies()

const acceptAllCookies = () => {
	cookies.set('cookieConsent', 'acceptedAll', '365d')
	visible.value = false
	const consent: Consent = {
		adStorage: true,
		userData: true,
		personalization: true,
		analytics: true,
	}
	window.updateConsent(consent)
}

const declineCookies = () => {
	cookies.set('cookieConsent', 'declined', '365d')
	visible.value = false
	const consent: Consent = {
		adStorage: false,
		userData: false,
		personalization: false,
		analytics: false,
	}
	window.updateConsent(consent)
}

const acceptSomeCookies = () => {
	cookies.set('cookieConsent', consent.value, '365d')
	visible.value = false
	window.updateConsent(consent)
}

onMounted(() => {
	const consent = cookies.get('cookieConsent')
	if (!consent) {
		visible.value = true
	} else if (consent === 'acceptedAll') {
		acceptAllCookies()
	} else if (isConsent(consent)) {
		window.updateConsent(consent)
	} else {
		cookies.remove('cookieConsent')
		visible.value = true
	}
})

function isConsent(obj: unknown): obj is Consent {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof (obj as Consent).adStorage === 'boolean' &&
		typeof (obj as Consent).userData === 'boolean' &&
		typeof (obj as Consent).personalization === 'boolean' &&
		typeof (obj as Consent).analytics === 'boolean'
	)
}
</script>
