<template>
	<code class="position-relative" @mousedown="copy">
		<mark>{{ code }}</mark>
	</code>
</template>
<script setup lang="ts">
import useAlertMixin from '@/helpers/alertMixin'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

const props = defineProps<{
	code: string
	disableCopy?: boolean
}>()

const { showErrorMessage, showSuccessMessage } = useAlertMixin()

const copy = async () => {
	if (isDesktop) {
		try {
			await navigator.clipboard.writeText(props.code)
			showSuccessMessage('Code copied to clipboard')
		} catch (error) {
			showErrorMessage(error as Error)
		}
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
