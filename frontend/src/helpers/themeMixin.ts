import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

export default function useThemeMixin() {
	const STORAGE_KEY = 'preferredTheme'

	const theme = useTheme()
	const isDark = ref(theme.global.name.value === 'darkTheme')

	watch(
		() => theme.global.name.value,
		(val) => {
			isDark.value = val === 'darkTheme'
		}
	)

	function apply(themeName: 'darkTheme' | 'lightTheme') {
		theme.change(themeName)
		isDark.value = themeName === 'darkTheme'
		localStorage.setItem(STORAGE_KEY, themeName)
	}

	function toggleTheme() {
		apply(isDark.value ? 'lightTheme' : 'darkTheme')
	}

	function checkThemeStorage() {
		const stored = localStorage.getItem(STORAGE_KEY) as
			| 'darkTheme'
			| 'lightTheme'
			| null
		if (stored === 'darkTheme' || stored === 'lightTheme') {
			apply(stored)
		}
	}

	return { isDark, toggleTheme, checkThemeStorage }
}
