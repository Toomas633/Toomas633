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
