<template>
	<v-footer class="d-flex flex-column bg-black">
		<div
			class="d-flex w-100 pa-1 justify-center justify-sm-space-between align-center">
			<span class="d-none d-sm-flex">
				<v-btn variant="text" href="/tos" color="grey" class="pa-0 mr-2">
					Terms of Service
				</v-btn>
				<v-btn variant="text" href="/privacy" color="grey" class="pa-0 ml-2">
					Privacy Policy
				</v-btn>
			</span>
			<span>
				<v-btn
					icon="mdi-rocket-launch"
					href="https://thingiverse.com/toomas633"
					class="mx-2"
					color="blue"
					size="medium"
					variant="plain"
					aria-label="Thingiverse link" />
				<v-btn
					icon="mdi-twitter"
					href="https://x.com/Toomas633"
					class="mx-2"
					color="light-blue"
					size="medium"
					variant="plain"
					aria-label="Twitter link" />
				<v-btn
					icon="mdi-reddit"
					href="https://reddit.com/u/toomas633"
					class="mx-2"
					color="deep-orange"
					size="medium"
					variant="plain"
					aria-label="Reddit link" />
				<v-btn
					icon="mdi-github"
					href="https://github.com/Toomas633/"
					class="mx-2"
					color="grey"
					size="medium"
					variant="plain"
					aria-label="GitHub link" />
				<v-btn
					icon="mdi-email-edit"
					href="mailto:mailto:info@toomas633.com"
					color="red"
					class="mx-2"
					size="medium"
					variant="plain"
					aria-label="Email link" />
				<PayPalBtn />
			</span>
		</div>
		<v-btn variant="text" href="/tos" color="grey" class="d-sm-none">
			Terms of Service
		</v-btn>
		<v-btn variant="text" href="/privacy" color="grey" class="d-sm-none">
			Privacy Policy
		</v-btn>
	</v-footer>
</template>
<script setup lang="ts">
import PayPalBtn from './PayPalBtn.vue'
</script>
<style lang="scss">
/* stylelint-disable selector-class-pattern */
.v-btn__content {
	font-weight: bold;
}
/* stylelint-enable selector-class-pattern */
</style>
