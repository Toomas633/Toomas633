import useAlertMixin from '@/helpers/alertMixin'
import { Language, License } from '@/types/github'
import axios, { AxiosError } from 'axios'

const url = 'https://api.github.com/repos/toomas633'

const { showErrorMessage } = useAlertMixin()

export async function getLicence(repo: string): Promise<License | undefined> {
	return axios
		.get(`${url}/${repo}/license`)
		.then((res) => res.data.license)
		.catch((error: AxiosError) => {
			showErrorMessage(error)
			return undefined
		})
}

export async function getLanguages(repo: string): Promise<Language[]> {
	return axios
		.get(`${url}/${repo}/languages`)
		.then((res) => {
			const records = res.data as Record<string, number>
			const langs = Object.keys(res.data).map(
				(key) =>
					({
						name: key,
						count: records[key],
					}) as Language
			)

			return langs
		})
		.catch((error) => {
			showErrorMessage(error)
			return []
		})
}
