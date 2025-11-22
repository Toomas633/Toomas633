<template>
	<p @mousedown="copyCode(text)">
		{{ text }}
		<v-tooltip
			v-if="isDesktop"
			activator="parent"
			location="bottom"
			aria-label="Click to copy">
			<v-icon
				:icon="
					copied ? (!error ? 'mdi-check' : 'mdi-close') : 'mdi-content-copy'
				" />
			{{ copied ? (!error ? 'Copied' : 'Error') : 'Copy' }}
		</v-tooltip>
	</p>
</template>
<script setup lang="ts">
import useCopyMixin from '@/helpers/copyMixin'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

defineProps<{
	text: string
}>()

const { copied, error, copy } = useCopyMixin()

const copyCode = async (text: string) => {
	if (isDesktop) {
		await copy(text)
	}
}
</script>
<style scoped lang="scss">
p {
	cursor: pointer;
}
</style>
