<template>
	<v-app>
		<AppNavbar />
		<v-main>
			<router-view />
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default defineComponent({
	name: 'App',
	components: { AppNavbar, AppFooter },

	data() {
		return {
			//
		}
	},
})
</script>
