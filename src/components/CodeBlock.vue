<template>
	<pre class="mt-4 pa-2 rounded text-left"> {{ code }}</pre>
</template>
<script setup lang="ts">
defineProps<{
	code: string
	disableCopy?: boolean
}>()
</script>
