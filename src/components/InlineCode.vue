<template>
	<code class="position-relative" @mousedown="copyCode(code)">
		<mark>
			{{ code }}
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
		</mark>
	</code>
</template>
<script setup lang="ts">
import useCopyMixin from '@/helpers/copyMixin'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

defineProps<{
	code: string
	disableCopy?: boolean
}>()

const { copied, error, copy } = useCopyMixin()

const copyCode = async (code: string) => {
	if (isDesktop) {
		await copy(code)
	}
}
</script>
<style scoped>
mark {
	background-color: rgb(var(--v-theme-secondary));
	color: white;
	overflow-wrap: break-word;
	white-space: pre-line;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
</style>
