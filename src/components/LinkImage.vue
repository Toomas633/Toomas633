<template>
	<a :href="href" target="_blank" rel="noopener">
		<img class="ma-2" :src="src" alt="alt" height="75" />
	</a>
</template>
<script setup lang="ts">
defineProps<{
	href: string
	src: string
	alt: string
}>()
</script>
