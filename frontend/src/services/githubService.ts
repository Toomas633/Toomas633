import useAlertMixin from '@/helpers/alertMixin'
import { Language, License } from '@/types/github'
import axios, { AxiosError } from 'axios'
import { GITHUB_TOKEN } from '@/constants/env'

const baseURL = 'https://api.github.com/repos/toomas633'

const { showErrorMessage } = useAlertMixin()

const githubApi = axios.create({
	baseURL,
	headers: {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
		...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
	},
})

export async function getLicence(repo: string): Promise<License | undefined> {
	return githubApi
		.get(`/${repo}/license`)
		.then((res) => res.data.license)
		.catch((error: AxiosError) => {
			showErrorMessage(error)
			return undefined
		})
}

export async function getLanguages(repo: string): Promise<Language[]> {
	return githubApi
		.get(`/${repo}/languages`)
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

export async function getLatestRelease(
	repo: string
): Promise<string | undefined> {
	return githubApi
		.get(`/${repo}/releases/latest`)
		.then((res) => res.data.tag_name)
		.catch((error: AxiosError) => {
			showErrorMessage(error)
			return undefined
		})
}
