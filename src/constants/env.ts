function readEnv(key: string): string | undefined {
	const env = (import.meta as ImportMeta).env as ImportMetaEnv
	const direct = env[key as keyof ImportMetaEnv] as string | undefined
	const fromProcess =
		typeof process !== 'undefined' ? process.env?.[key] : undefined
	return direct || fromProcess || undefined
}

export const GITHUB_TOKEN = readEnv('VITE_GITHUB_TOKEN') || ''

export const APP_VERSION =
	typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : ''

export const VUE_VERSION =
	typeof __VUE_VERSION__ !== 'undefined' ? __VUE_VERSION__ : ''

export const VUETIFY_VERSION =
	typeof __VUETIFY_VERSION__ !== 'undefined' ? __VUETIFY_VERSION__ : ''

export { readEnv }
