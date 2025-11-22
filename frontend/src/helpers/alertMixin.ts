import { PopupType } from '@/enums/popupType'
import { EventBus } from '@/util/eventBus'
import { EventType } from '@/enums/eventType'
import { PopupMessage } from '@/types/popup'

export default function useAlertMixin() {
	const alertEvent = EventType.SHOW_ALERT_MESSAGE

	function showErrorMessage(error: Error) {
		console.error(error)
		EventBus.emit(alertEvent, {
			message: error.message,
			type: PopupType.Error,
			stack: error.stack,
		} as PopupMessage)
	}

	function showSuccessMessage(status: string) {
		EventBus.emit(alertEvent, {
			message: status,
			type: PopupType.Success,
		} as PopupMessage)
	}

	function showWarningMessage(status: string) {
		console.warn(status)
		EventBus.emit(alertEvent, {
			message: status,
			type: PopupType.Warn,
		} as PopupMessage)
	}

	function showInfoMessage(info: string) {
		EventBus.emit(alertEvent, {
			message: info,
			type: PopupType.Info,
		} as PopupMessage)
	}

	return {
		showErrorMessage,
		showWarningMessage,
		showSuccessMessage,
		showInfoMessage,
	}
}
