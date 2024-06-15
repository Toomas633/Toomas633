<template>
	<v-footer class="d-flex flex-column">
		<div class="d-flex w-100 align-center px-4 pa-1">
			<v-spacer></v-spacer>
			<v-btn
				icon="mdi-rocket-launch"
				href="https://thingiverse.com/toomas633"
				class="mx-2"
				color="blue"
				size="medium"
				variant="plain">
			</v-btn>
			<v-btn
				icon="mdi-twitter"
				href="https://x.com/Toomas633"
				class="mx-2"
				color="light-blue"
				size="medium"
				variant="plain">
			</v-btn>
			<v-btn
				icon="mdi-reddit"
				href="https://reddit.com/u/toomas633"
				class="mx-2"
				color="deep-orange"
				size="medium"
				variant="plain">
			</v-btn>
			<v-btn
				icon="mdi-github"
				href="https://github.com/Toomas633/"
				class="mx-2"
				color="grey"
				size="medium"
				variant="plain">
			</v-btn>
			<v-btn
				icon="mdi-email-edit"
				href="mailto:mailto:info@toomas633.com"
				color="red"
				class="mx-2"
				size="medium"
				variant="plain">
			</v-btn>
			<v-btn
				icon="fa:fa-brands fa-cc-paypal"
				href="https://www.paypal.com/paypalme/ToomasK"
				class="mx-2"
				color="blue"
				size="medium"
				variant="plain">
			</v-btn>
		</div>
	</v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AppFooter',
	components: {},

	data: () => ({}),
})
</script>
