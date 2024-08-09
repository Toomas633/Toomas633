<template>
	<v-container class="pa-4">
		<v-row class="mt-0 d-block d-md-flex" justify="center">
			<v-col class="justify">
				<v-card class="bg-black text-center pa-4">
					<h1 class="text-center">Contact</h1>
					<p class="text-center">
						Having trouble? Raise a new Issue on project's GitHub, leave a
						comment, fill out the contact form.<br />
						<sup>
							(Any spam will result in automatic permanent IP ban and reporting)
						</sup>
					</p>
				</v-card>
				<v-card class="bg-black text-center pa-4 mt-6">
					<h1 class="text-center">Email</h1>
					<p class="text-center">
						If for watherver reason you can't or don't want to use the contact
						form you can also directly email me at:<br />
						<a href="mailto:info@toomas633.com">
							<v-icon icon="mdi-email-outline" />info@toomas633.com
						</a>
					</p>
				</v-card>
			</v-col>
			<v-col class="justify">
				<v-card class="bg-black text-center pa-4">
					<h1 class="text-center">Contact Form</h1>
					<v-form ref="form" v-model="valid">
						<v-row justify="center">
							<v-col>
								<v-text-field
									v-model="email"
									label="Email"
									:rules="emailRules"
									placeholder="johndoe@gmail.com"
									prepend-inner-icon="mdi-email-arrow-left-outline"
									class="pa-2"
									min-width="300"
									required />
							</v-col>
							<v-col>
								<v-autocomplete
									v-model="project"
									label="Project"
									:items="projects"
									prepend-inner-icon="mdi-toolbox"
									:rules="autocompleteRules"
									class="pa-2"
									min-width="300"
									required>
									<template #item="{ props, item }">
										<v-list-item v-bind="props" :prepend-icon="item.raw.icon" />
									</template>
								</v-autocomplete>
							</v-col>
						</v-row>
						<v-textarea
							v-model="message"
							label="Message..."
							:rules="textRules"
							prepend-inner-icon="mdi-format-align-left"
							counter="250"
							required />
						<v-btn :disabled="!valid" :loading="loading" @click="submit">
							<v-icon icon="mdi-email-fast" class="mr-1" /> Send
						</v-btn>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
		<MessagePopup
			v-if="showPopup"
			:message="popupMessage!"
			@close="closePopup" />
	</v-container>
</template>

<script setup lang="ts">
import useAlertMixin from '@/helpers/alertMixin'
import MessagePopup from '@/components/MessagePopup.vue'
import { computed, ref } from 'vue'
import { PopupMessage } from '@/types/popup'
import useTimerMixin from '@/helpers/timerMixin'

const valid = ref(false)
const loading = ref(false)
const email = ref('')
const project = ref('')
const message = ref('')
const popupMessage = ref<PopupMessage | undefined>(undefined)
const showPopup = ref(false)

const { showErrorMessage, showSuccessMessage } = useAlertMixin()
const { timer } = useTimerMixin()

const knownDomains = [
	'gmail.com',
	'yahoo.com',
	'outlook.com',
	'hotmail.com',
	'icloud.com',
	'aol.com',
	'protonmail.com',
	'mail.com',
	'yandex.com',
	'zoho.com',
	'toomas633.com',
]
const projects = [
	{ title: 'T6 Drone', icon: 'mdi-quadcopter' },
	{ title: 'Robotic Arm', icon: 'mdi-robot-industrial' },
	{ title: 'File Organizer', icon: 'mdi-file-document-arrow-right' },
	{ title: 'FileShare', icon: 'mdi-share-variant' },
]

const emailRules = computed(() => {
	return [
		(v: string) => !!v || 'Required',
		(v: string) => validateEmail(v) || 'E-mail must be valid',
		(v: string) =>
			isKnownDomain(v) === true ||
			`This email domain (${isKnownDomain(v)}) is not allowed, if this is a mistake email info@toomas633.com`,
	]
})

const textRules = computed(() => {
	return [
		(value: string) => !!value || 'Required.',
		(value: string) => (value && value.length >= 3) || 'Min 3 characters',
		(value: string) => (value && value.length < 250) || 'Max 250 characters',
	]
})

const autocompleteRules = computed(() => {
	return [(value: string) => !!value || 'Required']
})

const closePopup = () => {
	showPopup.value = false
}

const submit = async () => {
	loading.value = true
	try {
		const response = await fetch('http://localhost:3000/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				from: email.value,
				project: project.value,
				message: message.value,
			}),
		})
		const data = await response.json()
		if (data.success) {
			loading.value = false
			showSuccessMessage('Email sent', popupMessage, showPopup)
			timer((value: boolean) => {
				showPopup.value = value
			}, 5000)
		} else {
			loading.value = false
			showErrorMessage(data.error as Error, popupMessage, showPopup)
		}
	} catch (error) {
		loading.value = false
		showErrorMessage(error as Error, popupMessage, showPopup)
	}
}

function validateEmail(v: string) {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return emailRegex.test(v)
}

function isKnownDomain(email: string) {
	const domain = email.split('@')[1]
	return knownDomains.includes(domain) || domain
}
</script>
