import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App).use(Router).use(Vuetify).mount('#app')
