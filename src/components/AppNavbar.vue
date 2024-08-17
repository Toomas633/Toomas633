<template>
	<v-app-bar height="64">
		<a href="/" class="logo-and-title ml-4 align-center d-flex">
			<v-img src="/logo.svg" alt="Logo" max-height="40" max-width="40" />
			<v-toolbar-title class="ml-2"> Toomas633's Dungeon </v-toolbar-title>
		</a>
		<v-spacer />
		<div class="d-none d-md-flex">
			<template v-for="(item, index) in menuItems" :key="index">
				<DropdownMenu
					v-if="item.type === 'menu'"
					:icon="item.icon"
					:label="item.label"
					:options="item.options"
					:is-mobile="false" />
				<v-btn
					v-else
					:class="index === menuItems.length - 1 ? 'mr-2' : ''"
					:href="item.href">
					<v-icon v-if="item.icon" :icon="item.icon" class="mr-1" />{{
						item.label
					}}
				</v-btn>
			</template>
		</div>
		<v-menu>
			<template #activator="{ props }">
				<v-app-bar-nav-icon class="d-md-none" v-bind="props" />
			</template>
			<v-list class="mt-3">
				<template v-for="(item, index) in menuItems" :key="index">
					<v-list-item v-if="item.type === 'menu'" class="pr-0 pl-0">
						<DropdownMenu
							:icon="item.icon"
							:label="item.label"
							:options="item.options"
							:href="item.href"
							:is-mobile="true" />
					</v-list-item>
					<v-list-item v-else class="pr-0 pl-0">
						<v-btn class="elevation-0" :href="item.href">
							<v-icon v-if="item.icon" :icon="item.icon" class="mr-1" />{{
								item.label
							}}
						</v-btn>
					</v-list-item>
				</template>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>

<script setup lang="ts">
import DropdownMenu from './DropdownMenu.vue'

const menuItems = [
	{
		type: 'menu',
		icon: 'mdi-toolbox',
		label: 'Projects',
		options: [
			{
				label: 'T6 Drone',
				href: '/projects/t6-drone',
				icon: 'mdi-quadcopter',
			},
			{
				label: 'Robotic Arm',
				href: '/projects/robotic-arm',
				icon: 'mdi-robot-industrial',
			},
			{
				label: 'File Organizer',
				href: '/projects/file-organizer',
				icon: 'mdi-file-document-arrow-right',
			},
			{
				label: 'FileShare',
				href: '/projects/fileshare',
				icon: 'mdi-share-variant',
			},
		],
	},
	{
		type: 'menu',
		icon: 'mdi-controller',
		label: 'Game servers',
		options: [
			{
				label: 'Vanilla Minecraft',
				href: '/servers/minecraft',
				icon: 'mdi-minecraft',
			},
		],
	},
	{
		type: 'button',
		icon: 'mdi-card-account-mail',
		label: 'Contact',
		href: '/contact',
	},
	{
		type: 'button',
		icon: 'mdi-hand-coin',
		label: 'Donate',
		href: '/donate',
	},
]
</script>
<style scoped>
.logo-and-title {
	color: inherit;
	text-decoration: none;
	width: 16.563rem;
}
</style>
