<template>
	<v-app>
		<AppNavbar />
		<v-main>
			<router-view />
			<CookieConsent />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import CookieConsent from './components/CookieConsent.vue'
</script>
