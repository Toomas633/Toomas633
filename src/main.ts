import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueCookies from 'vue-cookies'

loadFonts()
createApp(App).use(Router).use(Vuetify).use(VueCookies).mount('#app')
