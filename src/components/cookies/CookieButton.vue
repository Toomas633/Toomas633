<template>
	<v-btn
		:class="isDesktop ? 'cookie-button-desktop' : 'cookie-button-mobile'"
		icon="mdi-cookie"
		position="fixed"
		location="bottom right"
		aria-label="Manage cookie preferences"
		color="primary"
		@click="emit('reopenSelection')" />
</template>
<script setup lang="ts">
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

const emit = defineEmits<(event: 'reopenSelection') => void>()
</script>
<style scoped lang="scss">
.cookie-button-desktop {
	right: calc(0.5rem + var(--scrollbar-offset)) !important;
	bottom: 0.5rem !important;
}

.cookie-button-mobile {
	right: 0.5rem !important;
	bottom: 0.5rem !important;
}
</style>
