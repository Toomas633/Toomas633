<template>
	<a :href="href" target="_blank" rel="noopener">
		<v-img
			class="ma-2"
			:src="isDark && srcDark ? srcDark : src"
			alt="alt"
			:height="height ?? 60"
			:width="width ?? 60" />
	</a>
</template>
<script setup lang="ts">
import useThemeMixin from '@/helpers/themeMixin'

defineProps<{
	href: string
	src: string
	srcDark?: string
	alt: string
	width?: string
	height?: string
}>()

const { isDark } = useThemeMixin()
</script>
