import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.min.css'
import '@/assets/scss/style.scss'

const darkTheme = {
	dark: true,
	colors: {
		background: '#353535',
		surface: '#f44336',
		primary: '#f44336',
		secondary: '#353535',
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
		'theme-kbd': '#575757ff',
		'theme-on-kbd': '#FFFFFF',
		'theme-code': '#575757ff',
		'theme-on-code': '#FFFFFF',
	},
}

const lightTheme = {
	dark: false,
	colors: {
		background: '#FAFAFA',
		surface: '#FFFFFF',
		primary: '#f44336',
		secondary: '#e2e2e2ff',
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
		'theme-kbd': '#e2e2e2ff',
		'theme-on-kbd': '#000000',
		'theme-code': '#e2e2e2ff',
		'theme-on-code': '#000000',
	},
}

export default createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	theme: {
		defaultTheme: 'darkTheme',
		themes: {
			darkTheme,
			lightTheme,
		},
	},
	components: {},
})
