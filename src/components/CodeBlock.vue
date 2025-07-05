<template>
	<code class="position-relative">
		<pre
			class="pa-2 rounded text-left overflow-auto"
			:class="topMargin ? 'mt-4' : ''"
			:style="style">
 {{ code }} </pre
		>
		<CopyButton
			:style="topMargin ? '' : 'top: 1.75rem;'"
			:text-to-copy="code"
			:disable-copy="disableCopy" />
	</code>
</template>
<script setup lang="ts">
import { StyleValue } from 'vue'
import CopyButton from './CopyButton.vue'

defineProps<{
	code: string
	disableCopy?: boolean
	inheritClass?: string
	style?: StyleValue
	topMargin?: boolean
}>()
</script>
<style scoped>
pre {
	background-color: rgb(var(--v-theme-secondary));
	color: white;
	overflow-wrap: break-word;
	overflow: auto;
	white-space: pre-line;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
}
</style>
