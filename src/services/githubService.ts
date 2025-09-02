import useAlertMixin from '@/helpers/alertMixin'
import { License } from '@/types/github'
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
