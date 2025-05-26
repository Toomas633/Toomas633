<template>
	<a :href="href" target="_blank" rel="noopener">
		<v-icon v-if="icon" :icon="icon" />{{ text ?? href }}
	</a>
</template>
<script setup lang="ts">
defineProps<{
	href: string
	text?: string
	icon?: string
}>()
</script>
<style scoped>
a {
	color: rgb(var(--v-theme-primary));
	font-weight: bold;
}
</style>
