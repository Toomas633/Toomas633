<template>
	<v-container class="pa-4"> </v-container>
	<v-row class="pa-4 d-block d-md-flex" justify="center">
		<v-col justify="center">
			<v-card class="bg-black text-center pa-4">
				<h1 class="text-center">Contact</h1>
				<p class="text-center">
					Having trouble? Raise a new Issue on project's GitHub, leave a
					comment, fill out the contact form.<br /><sup
						>(Any spam will result in automatic permanent IP ban and
						reporting)</sup
					>
				</p>
			</v-card>
		</v-col>
		<v-col justify="center">
			<v-card class="bg-black text-center pa-4">
				<h1 class="text-center">Contact Form</h1>
				<v-form ref="form" v-model="valid">
					<v-row justify="center" class="d-flex">
						<v-col>
							<v-text-field
								label="Email"
								v-model="form.email"
								:rules="emailRules"
								placeholder="johndoe@gmail.com"
								prepend-inner-icon="mdi-email-arrow-left-outline"
								class="pa-2"
								min-width="300"
								required />
						</v-col>
						<v-col>
							<v-autocomplete
								label="Project"
								v-model="form.project"
								:items="projects"
								prepend-inner-icon="mdi-toolbox"
								:rules="autocompleteRules"
								class="pa-2"
								min-width="300"
								required>
								<template v-slot:item="{ props, item }">
									<v-list-item v-bind="props" :prepend-icon="item.raw.icon" />
								</template>
							</v-autocomplete>
						</v-col>
					</v-row>
					<v-textarea
						label="Message..."
						v-model="form.message"
						:rules="textRules"
						prepend-inner-icon="mdi-format-align-left"
						counter="250"
						required />
					<v-btn :disabled="!valid" :loading="loading" @click="submit"
						><v-icon icon="mdi-email-fast" class="mr-1" />Send</v-btn
					>
				</v-form>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ContactView',
	data: () => ({
		valid: false,
		loading: false,
		knownDomains: [
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
		],
		projects: [
			{ title: 'T6 Drone', icon: 'mdi-quadcopter' },
			{ title: 'Robotic Arm', icon: 'mdi-robot-industrial' },
			{ title: 'File Organizer', icon: 'mdi-file-document-arrow-right' },
			{ title: 'FileShare', icon: 'mdi-share-variant' },
		],
		form: {
			email: '',
			project: '',
			message: '',
		},
	}),
	computed: {
		emailRules() {
			return [
				(v: string) => !!v || 'Required',
				(v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
				(v: string) =>
					this.isKnownDomain(v) === true ||
					`This email domain (${this.isKnownDomain(v)}) is not allowed, if this is a mistake email info@toomas633.com`,
			]
		},
		textRules() {
			return [
				(value: string) => !!value || 'Required.',
				(value: string) => (value && value.length >= 3) || 'Min 3 characters',
				(value: string) =>
					(value && value.length < 250) || 'Max 250 characters',
			]
		},
		autocompleteRules() {
			return [(value: string) => !!value || 'Required']
		},
	},
	methods: {
		isKnownDomain(email: string) {
			const domain = email.split('@')[1]
			return this.knownDomains.includes(domain) || domain
		},
		async submit() {
			this.loading = true
			console.log(this.form)
			try {
				const response = await fetch('hhtp://localhost:3000/send-email', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: this.form.email,
						project: this.form.project,
						message: this.form.message,
					}),
				})
				const data = await response.json()
				if (data.success) {
					this.loading = false
				} else {
					this.loading = false
					alert('Failed to send email')
				}
			} catch (error) {
				console.error('ERROR', error)
				alert('Error sending email')
				this.loading = false
			}
		},
	},
})
</script>
