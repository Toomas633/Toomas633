import { Consent } from '@/types/cookies'
import { ref } from 'vue'
import useCookies from './useCookies'

export default function useCookieMixin() {
	const DEFAULT_CONSENT: Consent = {
		necessary: true,
		ads: false,
		analytics: false,
		userData: false,
	}
	const COOKIE_KEY = 'cookieConsent'

	const cookies = useCookies()

	const consent = ref<Consent>({ ...DEFAULT_CONSENT })

	function acceptAllCookies() {
		const all: Consent = {
			necessary: true,
			ads: true,
			analytics: true,
			userData: true,
		}
		setConsentCookie('acceptedAll')
		consent.value = all
		globalThis.updateConsent(all)
	}

	function declineCookies() {
		const declined: Consent = {
			necessary: true,
			ads: false,
			analytics: false,
			userData: false,
		}
		setConsentCookie('declined')
		consent.value = declined
		globalThis.updateConsent(declined)
	}

	function setConsentCookie(value: Consent | 'acceptedAll' | 'declined') {
		if (value === 'acceptedAll' || value === 'declined') {
			cookies.set(COOKIE_KEY, value, '365d')
			return
		}
		cookies.set(COOKIE_KEY, value, '365d')
	}

	function removeAllCookies() {
		cookies.remove(COOKIE_KEY)
	}

	function readConsentCookie():
		| Consent
		| 'acceptedAll'
		| 'declined'
		| undefined {
		const raw = cookies.get(COOKIE_KEY)
		if (!raw) return undefined

		if (raw === 'acceptedAll' || raw === 'declined') return raw
		try {
			if (isConsent(raw)) return raw
		} catch (error) {
			console.error('Error parsing consent cookie:', error)
		}
		return undefined
	}

	function isConsent(obj: unknown): obj is Consent {
		return (
			typeof obj === 'object' &&
			obj !== null &&
			typeof (obj as Consent).necessary === 'boolean' &&
			typeof (obj as Consent).ads === 'boolean' &&
			typeof (obj as Consent).analytics === 'boolean' &&
			typeof (obj as Consent).userData === 'boolean'
		)
	}

	return {
		DEFAULT_CONSENT,
		consent,
		acceptAllCookies,
		declineCookies,
		setConsentCookie,
		removeAllCookies,
		readConsentCookie,
		isConsent,
	}
}
