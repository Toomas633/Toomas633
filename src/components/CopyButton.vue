<template>
	<v-btn
		v-if="!disableCopy && isDesktop"
		:icon="copied ? (!error ? 'mdi-check' : 'mdi-close') : 'mdi-content-copy'"
		class="position-absolute"
		:class="hover ? 'hover' : 'top-right'"
		variant="plain"
		:ripple="false"
		rounded="0"
		density="compact"
		@click="copy(textToCopy)" />
</template>
<script setup lang="ts">
import { isDesktop } from '@basitcodeenv/vue3-device-detect'
import useCopyMixin from '@/helpers/copyMixin'

defineProps<{
	textToCopy: string
	hover?: boolean
	disableCopy?: boolean
}>()

const { copied, error, copy } = useCopyMixin()
</script>
<style scoped>
.top-right {
	top: 3rem;
	right: 0.5rem;
}

.hover {
	background-color: black;
	top: -0.219rem;
	right: -1.75rem;
}
</style>
