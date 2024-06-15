import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@ionic/vue/css/ionic.bundle.css'
import { addIcons } from 'ionicons'
import * as ioniconsIcons from 'ionicons/icons'
import { IonicVue } from '@ionic/vue'

loadFonts()

const app = createApp(App).use(router).use(vuetify).use(IonicVue)

const icons = Object.assign({}, ioniconsIcons)
addIcons(icons)

app.mount('#app')
