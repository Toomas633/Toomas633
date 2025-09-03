<template>
	<v-card class="bg-black text-center" justfy="center">
		<h1 v-if="title">
			{{ title }}
		</h1>
		<v-btn
			v-if="href && icon"
			icon
			:height="size"
			:width="size"
			class="pa-0 bg-black"
			:class="text ? 'mb-0' : 'mb-9'"
			:href="href"
			:aria-label="label ?? text ?? title">
			<v-icon :icon="icon" :color="iconColor" :size="size" />
		</v-btn>
		<v-img v-if="image" :src="image" rounded height="240" class="mt-5" />
		<v-card-text v-if="text" class="pb-2 pr-2 pl-2">
			{{ text }}
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
defineProps<{
	label?: string
	title?: string
	href?: string
	icon?: string
	iconColor?: string
	text?: string
	image?: string
	size: string
}>()
</script>
