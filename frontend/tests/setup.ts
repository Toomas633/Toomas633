import { config } from '@vue/test-utils'

// Global test setup - configure stubs for Vuetify components
config.global.stubs = {
	'v-icon': true,
	'v-tooltip': true,
	'v-btn': true,
	'v-card': true,
}

config.global.mocks = {
	$t: (key: string) => key, // Mock translation function if needed
}

// You can add more global setup here
