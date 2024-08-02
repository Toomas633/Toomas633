<template>
	<v-app>
		<AppNavbar />
		<v-main>
			<router-view />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

console.log('test')
</script>
