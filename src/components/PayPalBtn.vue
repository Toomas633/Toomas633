<template>
	<v-btn
		v-if="isBtn"
		icon="fa:fa-brands fa-cc-paypal"
		class="mx-2"
		color="blue"
		size="medium"
		variant="plain"
		aria-label="PayPal link"
		@click="showPayPal" />
	<v-card v-else class="text-center pb-5" elevation="4" justfy="center">
		<h1>PayPal</h1>
		<v-img
			:src="qr"
			rounded="xl"
			height="240"
			width="240"
			class="mt-3 mb-2 mx-auto cursor-pointer"
			@click="showPayPal" />
	</v-card>
	<span id="donate-button" style="display: none" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import qr from '@/assets/icons/donate/paypal-qr.svg'

withDefaults(
	defineProps<{
		isBtn?: boolean
	}>(),
	{
		isBtn: true,
	}
)

function loadPayPalScript(): Promise<void> {
	return new Promise((resolve) => {
		if (document.getElementById('paypal-donate-sdk')) {
			resolve()
			return
		}
		const script = document.createElement('script')
		script.id = 'paypal-donate-sdk'
		script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js'
		script.onload = () => resolve()
		document.body.appendChild(script)
	})
}

function renderPayPalButton() {
	// @ts-expect-error PayPal script
	if (window.PayPal && window.PayPal.Donation) {
		const container = document.getElementById('donate-button')
		if (container) container.innerHTML = ''
		// @ts-expect-error PayPal script
		window.PayPal.Donation.Button({
			env: 'production',
			hosted_button_id: 'ND263DM2ZUV8J',
			image: {
				src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif',
				alt: 'Donate with PayPal button',
				title: 'PayPal - The safer, easier way to pay online!',
			},
		}).render('#donate-button')
	}
}

async function showPayPal() {
	await loadPayPalScript()
	const container = document.getElementById('donate-button')
	if (container) {
		renderPayPalButton()
		setTimeout(() => {
			const paypalBtn = container.querySelector('img')
			if (paypalBtn) {
				;(paypalBtn as HTMLElement).click()
			}
		}, 300)
	}
}

onMounted(async () => {
	await loadPayPalScript()
	renderPayPalButton()
})
</script>
