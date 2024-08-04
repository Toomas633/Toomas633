<template>
	<v-container class="pa-4">
		<h1 class="text-center">For those who wish to help</h1>
		<p class="text-center">
			Here are links to support my projects, for any amount you feel like.
			Everything helps as I am a student who is doing projects on the side.
		</p>
	</v-container>
	<v-row class="pa-4 d-flex" justify="center">
		<v-col>
			<ButtonCard
				size="260"
				title="Amazon DE"
				href="https://www.amazon.de/hz/wishlist/ls/2MCH6EAMYMPHL?ref_=wl_share"
				icon="fa:fa-brands fa-amazon" />
		</v-col>
		<v-col>
			<ButtonCard
				size="260"
				title="PayPal"
				href="https://www.paypal.com/paypalme/ToomasK"
				icon="fa:fa-brands fa-paypal"
				icon-color="blue" />
		</v-col>
		<v-col>
			<ButtonCard
				size="260"
				title="Bitcoin"
				:image="btc"
				text="bc1q97xwfd8vr0q0jste47fd8me2nke0jcj8aaue9w" />
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import ButtonCard from '@/components/ButtonCard.vue'
import btc from '@/assets/btc.png'
</script>
