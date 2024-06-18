<template>
	<v-card class="mr-8 ml-8 bg-black text-center pa-4">
		<h1 v-if="title">{{ title }}</h1>
		<v-btn
			v-if="href && icon"
			icon
			:height="size"
			:width="size"
			class="pa-0 bg-black"
			:class="text ? 'mb-0' : 'mb-9'"
			:href="href">
			<v-icon :icon="icon" :color="iconColor" :size="size" />
		</v-btn>
		<v-img v-if="image" :src="image" rounded height="240" class="mt-5" />
		<v-card-text v-if="text" class="pb-0">{{ text }}</v-card-text>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ButtonCard',
	props: {
		title: {
			type: String,
			default: undefined,
		},
		href: {
			type: String,
			default: undefined,
		},
		icon: {
			type: String,
			default: undefined,
		},
		iconColor: {
			type: String,
			default: undefined,
		},
		text: {
			type: String,
			default: undefined,
		},
		image: {
			type: String,
			default: undefined,
		},
		size: {
			type: String,
			required: true,
		},
	},
})
</script>
