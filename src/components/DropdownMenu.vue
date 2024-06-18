<template>
	<v-menu offset-y :location="isMobile ? 'start' : undefined">
		<template v-slot:activator="{ props }">
			<v-btn v-bind="props" :href="href" class="elevation-0">
				<v-icon v-if="icon" :icon="icon" class="mr-1" />{{ label }}
			</v-btn>
		</template>
		<v-list :class="isMobile ? 'mr-1' : ''">
			<v-list-item
				v-for="(option, index) in options"
				:key="index"
				:href="option.href"
				class="pr-0 pl-0">
				<v-btn class="elevation-0" :href="option.href">
					<v-icon v-if="option.icon" :icon="option.icon" class="mr-1" />{{
						option.label
					}}
				</v-btn>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Option {
	label: string
	href?: string
	icon?: string
}

export default defineComponent({
	name: 'DropdownMenu',
	props: {
		icon: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		options: {
			type: Array as PropType<Option[]>,
			required: false,
		},
		href: {
			type: String,
			required: false,
		},
		isMobile: {
			type: Boolean,
			required: true,
		},
	},
})
</script>
