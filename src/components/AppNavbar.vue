<template>
	<v-app-bar app>
		<router-link to="/" class="logo-and-title ml-4 align-center d-flex">
			<v-img
				src="@/assets/logo.png"
				alt="Logo"
				max-height="40"
				max-width="40"
				contain>
			</v-img>
			<v-toolbar-title class="ml-2">Toomas633's Dungeon</v-toolbar-title>
		</router-link>
		<v-spacer></v-spacer>
		<div class="d-none d-md-flex">
			<template v-for="(item, index) in menuItems" :key="index">
				<DropdownMenu
					v-if="item.type === 'menu'"
					:icon="item.icon"
					:label="item.label"
					:options="item.options"
					:isMobile="false" />
				<v-btn
					v-else
					:class="index === menuItems.length - 1 ? 'mr-2' : ''"
					:href="item.href">
					<v-icon :icon="item.icon" class="mr-1"></v-icon>{{ item.label }}
				</v-btn>
			</template>
		</div>
		<v-menu offset-y>
			<template v-slot:activator="{ isActive: on, props: attrs }">
				<v-app-bar-nav-icon
					class="d-md-none"
					v-bind="attrs"
					v-on="on"></v-app-bar-nav-icon>
			</template>
			<v-list class="mt-2">
				<template v-for="(item, index) in menuItems" :key="index">
					<v-list-item v-if="item.type === 'menu'" class="pr-0 pl-0">
						<DropdownMenu
							:icon="item.icon"
							:label="item.label"
							:options="item.options"
							:href="item.href"
							:isMobile="true" />
					</v-list-item>
					<v-list-item v-else class="pr-0 pl-0">
						<v-btn class="elevation-0" :href="item.href">
							<v-icon :icon="item.icon" class="mr-1"></v-icon>{{ item.label }}
						</v-btn>
					</v-list-item>
				</template>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DropdownMenu from './DropdownMenu.vue'

export default defineComponent({
	name: 'AppNavbar',
	components: { DropdownMenu },
	data() {
		return {
			menuItems: [
				{
					type: 'menu',
					icon: 'mdi-toolbox',
					label: 'Projects',
					options: [{ label: 'Option 1' }, { label: 'Option 2' }],
					href: undefined,
				},
				{
					type: 'menu',
					icon: 'mdi-controller',
					label: 'Game servers',
					options: [{ label: 'Option 1' }, { label: 'Option 2' }],
				},
				{
					type: 'button',
					icon: 'mdi-card-account-mail',
					label: 'Contact',
					href: 'contact',
				},
				{
					type: 'button',
					icon: 'mdi-hand-coin',
					label: 'Donate',
					href: 'donate',
				},
			],
		}
	},
})
</script>

<style>
.logo-and-title {
	color: inherit;
	text-decoration: none;
	width: 265px;
}
</style>
