<template>
	<code>
		<mark>{{ code }}</mark>
	</code>
</template>
<script setup lang="ts">
defineProps<{
	code: string
	disableCopy?: boolean
}>()
</script>
<style scoped>
mark {
	background-color: rgb(var(--v-theme-secondary));
	color: white;
	overflow-wrap: break-word;
	white-space: pre-line;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
}
</style>
