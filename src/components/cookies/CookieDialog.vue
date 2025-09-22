<template>
	<v-dialog v-model="show" persistent max-width="720" role="dialog">
		<v-card class="bg-background" elevation="8">
			<v-card-title class="text-h6 d-flex align-center bg-black">
				<v-icon icon="mdi-cookie" class="mr-2" />
				Cookie Preferences
			</v-card-title>
			<v-divider class="border-opacity-50" />
			<v-card-text class="text-body-2 pt-4">
				<p class="mb-3">
					We use cookies to make our site work, improve performance, and deliver
					relevant content and ads. You can accept all, reject non-essential, or
					customize your choices. For more details see our
					<LinkComponent text="Privacy Policy" href="/privacy" />.
				</p>
				<v-row class="mt-2">
					<v-col cols="12" sm="6" class="pb-1">
						<v-switch
							v-model="consent.necessary"
							label="Strictly Necessary"
							color="success"
							class="cookie-category"
							disabled
							hint="Required for basic site functionality. Always enabled."
							persistent-hint />
					</v-col>
					<v-col cols="12" sm="6" class="pb-1">
						<v-switch
							v-model="consent.analytics"
							label="Analytics"
							color="success"
							class="cookie-category"
							hint="Helps us understand usage and improve performance."
							persistent-hint />
					</v-col>
					<v-col cols="12" sm="6" class="pb-1">
						<v-switch
							v-model="consent.ads"
							label="Personalized Ads"
							color="success"
							class="cookie-category"
							hint="Used to deliver and measure tailored advertising."
							persistent-hint />
					</v-col>
					<v-col cols="12" sm="6" class="pb-1">
						<v-switch
							v-model="consent.userData"
							label="Personal Data Usage"
							color="success"
							class="cookie-category"
							hint="Allows limited personalization based on user data."
							persistent-hint />
					</v-col>
				</v-row>
			</v-card-text>
			<v-divider class="border-opacity-25" />
			<v-card-actions
				class="flex-wrap gap-2 px-6 my-2"
				:class="isMobile ? 'flex-column' : 'justify-space-between'">
				<v-btn variant="outlined" color="red" @click="decline"> Deny </v-btn>
				<v-btn variant="outlined" color="success" @click="acceptSome">
					Save Preferences
				</v-btn>
				<v-btn variant="flat" color="success" @click="acceptAll">
					Accept All
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script setup lang="ts">
import { computed, watch } from 'vue'
import useCookieMixin from '@/helpers/cookieMixin'
import { Consent } from '@/types/cookies'
import { isMobile } from '@basitcodeenv/vue3-device-detect'

const props = defineProps<{
	visible: boolean
}>()

const emit = defineEmits<{
	(e: 'update:visible', value: boolean): void
}>()

const {
	DEFAULT_CONSENT,
	consent,
	acceptAllCookies,
	declineCookies,
	setConsentCookie,
	readConsentCookie,
	isConsent,
} = useCookieMixin()

const show = computed({
	get: () => props.visible,
	set: (val: boolean) => emit('update:visible', val),
})

watch(show, (newVal) => {
	if (newVal) {
		const stored = readConsentCookie()
		if (stored === 'acceptedAll') {
			consent.value = {
				necessary: true,
				ads: true,
				analytics: true,
				userData: true,
			}
		} else if (stored === 'declined') {
			consent.value = { ...DEFAULT_CONSENT }
		} else if (stored && isConsent(stored)) {
			const { ads, analytics, userData } = stored
			consent.value = { necessary: true, ads, analytics, userData }
		} else {
			consent.value = { ...DEFAULT_CONSENT }
		}
	}
})

function acceptAll() {
	acceptAllCookies()
	close()
}

function decline() {
	declineCookies()
	close()
}

function acceptSome() {
	const partial: Consent = { ...consent.value, necessary: true }
	setConsentCookie(partial)
	consent.value = partial
	window.updateConsent(partial)
	close()
}

function close() {
	show.value = false
}
</script>
<style scoped lang="scss">
.cookie-category {
	padding: 0.75rem;
	border-radius: 0.5rem;
	border: 0.063rem solid rgb(var(--v-theme-on-background), 0.08);

	&:hover {
		background: rgb(var(--v-theme-on-background), 0.05);
	}
}
</style>
