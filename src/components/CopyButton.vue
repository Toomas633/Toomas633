<template>
	<v-btn
		v-if="!disableCopy && isDesktop"
		:icon="copied ? (!error ? 'mdi-check' : 'mdi-close') : 'mdi-content-copy'"
		:class="buttonClass"
		variant="plain"
		:ripple="false"
		rounded="0"
		density="compact"
		aria-label="Copy button"
		@click="copy(textToCopy)" />
</template>
<script setup lang="ts">
import { isDesktop } from '@basitcodeenv/vue3-device-detect'
import useCopyMixin from '@/helpers/copyMixin'
import { computed } from 'vue'

const props = defineProps<{
	textToCopy: string
	hover?: boolean
	disableCopy?: boolean
	inline?: boolean
}>()

const { copied, error, copy } = useCopyMixin()

const buttonClass = computed(() => {
	if (!props.inline) {
		return `position-absolute ${props.hover ? 'hover' : 'top-right'}`
	}
	return ''
})
</script>
<style scoped lang="scss">
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
