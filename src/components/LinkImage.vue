<template>
	<a :href="href" target="_blank" rel="noopener">
		<v-img
			class="ma-2"
			:src="src"
			alt="alt"
			:height="height ?? 60"
			:width="width ?? 60" />
	</a>
</template>
<script setup lang="ts">
defineProps<{
	href: string
	src: string
	alt: string
	width?: string
	height?: string
}>()
</script>
