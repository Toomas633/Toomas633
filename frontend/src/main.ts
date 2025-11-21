import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies'
import VueDeviceDetect from '@basitcodeenv/vue3-device-detect'
import { createHead } from '@vueuse/head'
import 'leaflet/dist/leaflet.css'

const head = createHead()

createApp(App)
	.use(Router)
	.use(Vuetify)
	.use(VueCookies)
	.use(VueDeviceDetect)
	.use(head)
	.mount('#app')
