<template>
	<v-menu :location="isMobile ? 'start' : undefined">
		<template #activator="{ props }">
			<v-btn v-bind="props" :href="href" class="elevation-0">
				<v-icon v-if="icon" :icon="icon" class="mr-1" />
				<p class="font-weight-bold">{{ label }}</p>
			</v-btn>
		</template>
		<v-list :class="isMobile ? 'mr-1' : ''">
			<v-list-item
				v-for="(option, index) in options"
				:key="index"
				:href="option.href"
				class="pr-0 pl-0">
				<v-btn class="elevation-0" :href="option.href">
					<v-icon v-if="option.icon" :icon="option.icon" class="mr-1" />
					<p class="font-weight-bold">{{ option.label }}</p>
				</v-btn>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script setup lang="ts">
import type { Option } from '@/types/option'

defineProps<{
	icon: string
	label: string
	options?: Option[]
	href?: string
	isMobile: boolean
}>()
</script>
