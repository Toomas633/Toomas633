<template>
	<code class="position-relative">
		<pre class="mt-4 pa-2 rounded text-left overflow-auto"> {{ code }}</pre>
		<CopyButton :text-to-copy="code" :disable-copy="disableCopy" />
	</code>
</template>
<script setup lang="ts">
import CopyButton from './CopyButton.vue'

defineProps<{
	code: string
	disableCopy?: boolean
	inheritClass?: string
}>()
</script>
<style scoped>
pre {
	background-color: rgb(var(--v-theme-secondary));
	color: white;
	overflow-wrap: break-word;
	overflow: auto;
	max-height: 12.688rem;
	white-space: pre-line;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
}
</style>
