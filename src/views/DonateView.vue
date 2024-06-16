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
			<v-card title="Amazon DE" class="mr-8 ml-8 bg-black text-center pa-4">
				<v-btn
					icon
					height="260"
					width="260"
					class="pa-0 bg-black mb-8"
					href="https://www.amazon.de/hz/wishlist/ls/2MCH6EAMYMPHL?ref_=wl_share">
					<v-icon icon="fa:fa-brands fa-amazon" size="260"></v-icon>
				</v-btn>
			</v-card>
		</v-col>
		<v-col>
			<v-card title="PayPal" class="mr-8 ml-8 bg-black text-center pa-4">
				<v-btn
					icon
					height="260"
					width="260"
					class="pa-0 bg-black mb-8"
					href="https://www.paypal.com/paypalme/ToomasK">
					<v-icon
						icon="fa:fa-brands fa-paypal"
						color="blue"
						size="260"></v-icon>
				</v-btn>
			</v-card>
		</v-col>
		<v-col>
			<v-card title="Bitcoin" class="mr-8 ml-8 bg-black text-center pa-4">
				<v-img src="@/assets/btc.png" rounded height="260"></v-img>
				<p class="mt-2">bc1q97xwfd8vr0q0jste47fd8me2nke0jcj8aaue9w</p>
			</v-card>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'DonateView',
	components: {},
})
</script>
<style>
h1,
.v-card-title {
	color: rgb(var(--v-theme-primary));
}
</style>
