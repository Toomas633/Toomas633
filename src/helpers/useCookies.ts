import { getCurrentInstance } from 'vue'

export default function useCookies() {
	const instance = getCurrentInstance()
	if (!instance) {
		throw new Error('useCookies must be called within a setup function')
	}

	return instance.appContext.config.globalProperties.$cookies
}
