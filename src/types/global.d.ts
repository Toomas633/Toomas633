interface Window {
	updateConsent: (consent: Consent) => void
}

interface ImportMetaEnv {
	VITE_GITHUB_TOKEN?: string
	VITE_APP_VERSION?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare const __APP_VERSION__: string
declare const __VUE_VERSION__: string
declare const __VUETIFY_VERSION__: string
