import { PopupType } from '@/enums/popupType'
import { PopupMessage } from '@/interfaces/popup'
import useTimerMixin from './timerMixin'
import { Ref } from 'vue'

export default function useAlertMixin() {
	const { timer } = useTimerMixin()
	const fiveSeconds = 5000

	function showErrorMessage(
		error: Error,
		popupMessage: Ref<PopupMessage | undefined>,
		showPopup: Ref<boolean>
	) {
		console.error(error)
		popupMessage.value = {
			message: error.message,
			type: PopupType.Error,
			stack: error.stack,
		}
		timer((value: boolean) => {
			showPopup.value = value
		}, fiveSeconds)
	}

	function showSuccessMessage(
		status: string,
		popupMessage: Ref<PopupMessage | undefined>,
		showPopup: Ref<boolean>
	) {
		popupMessage.value = {
			message: status,
			type: PopupType.Success,
		}
		timer((value: boolean) => {
			showPopup.value = value
		}, fiveSeconds)
	}

	function showWarningMessage(
		status: string,
		popupMessage: Ref<PopupMessage | undefined>,
		showPopup: Ref<boolean>
	) {
		console.warn(status)
		popupMessage.value = {
			message: status,
			type: PopupType.Warn,
		}
		timer((value: boolean) => {
			showPopup.value = value
		}, fiveSeconds)
	}

	function showInfoMessage(
		info: string,
		popupMessage: Ref<PopupMessage | undefined>,
		showPopup: Ref<boolean>
	) {
		popupMessage.value = {
			message: info,
			type: PopupType.Info,
		}
		timer((value: boolean) => {
			showPopup.value = value
		}, fiveSeconds)
	}

	return {
		showErrorMessage,
		showWarningMessage,
		showSuccessMessage,
		showInfoMessage,
	}
}
