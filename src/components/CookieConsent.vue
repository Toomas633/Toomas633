<template>
	<v-dialog v-model="visible" persistent max-width="500">
		<v-card v-model="visible" class="bg-background">
			<v-card-title class="text-h5 bg-black">
				<v-icon icon="mdi-cookie" /> Cookie Consent
			</v-card-title>
			<v-card-text>
				We use cookies to enhance your experience, analyze site traffic, and
				serve targeted advertisements. By continuing to use this website, you
				agree to our use of cookies.
			</v-card-text>
			<v-card-actions>
				<v-btn color="green" @click="acceptCookies"> I Accept </v-btn>
				<v-btn @click="declineCookies"> Decline </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useCookies from '@/helpers/useCookies'

const visible = ref(false)
const cookies = useCookies()

const acceptCookies = () => {
	cookies.set('cookieConsent', 'accepted', '365d')
	visible.value = false
	initializeGoogleServices()
}

const declineCookies = () => {
	cookies.set('cookieConsent', 'declined', '365d')
	visible.value = false
}

const initializeGoogleServices = () => {
	const gtagScript = document.getElementById('gtag-script') as HTMLScriptElement
	if (gtagScript) {
		gtagScript.dataset.consent = 'true'
		window.initializeGtag()
	}
}

onMounted(() => {
	const consent = cookies.get('cookieConsent')
	if (!consent) {
		visible.value = true
	} else if (consent === 'accepted') {
		initializeGoogleServices()
	}
})
</script>
