// Global type declarations for TypeScript
// These extend built-in types like Window and ImportMeta

import type { Consent } from './cookies'

declare global {
	interface Window {
		updateConsent: (consent: Consent) => void
	}

	// Extend globalThis to include the updateConsent function
	var updateConsent: (consent: Consent) => void

	interface ImportMetaEnv {
		VITE_GITHUB_TOKEN?: string
		VITE_APP_VERSION?: string
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv
	}

	const __APP_VERSION__: string
	const __VUE_VERSION__: string
	const __VUETIFY_VERSION__: string
}

export {}
