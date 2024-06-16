import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { fa } from 'vuetify/iconsets/fa'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

const myTheme = {
	dark: true,
	colors: {
		background: '#353535',
		surface: '#f44336',
		primary: '#f44336',
		'primary-darken-1': '#f44336',
		secondary: '#353535',
		'secondary-darken-1': '#353535',
		error: '#f44336',
		info: '#94a3b8',
		success: '#4CAF50',
		warning: '#FB8C00',
	},
	variables: {
		'border-color': '#000000',
		'border-opacity': 0.12,
		'high-emphasis-opacity': 0.87,
		'medium-emphasis-opacity': 0.6,
		'disabled-opacity': 0.38,
		'idle-opacity': 0.04,
		'hover-opacity': 0.04,
		'focus-opacity': 0.12,
		'selected-opacity': 0.08,
		'activated-opacity': 0.12,
		'pressed-opacity': 0.12,
		'dragged-opacity': 0.08,
		'theme-kbd': '#212529',
		'theme-on-kbd': '#FFFFFF',
		'theme-code': '#F5F5F5',
		'theme-on-code': '#000000',
	},
}

export default createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
			fa,
		},
	},
	theme: {
		defaultTheme: 'myTheme',
		themes: {
			myTheme,
		},
	},
})
