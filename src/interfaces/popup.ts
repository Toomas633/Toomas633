import { PopupType } from '@/enums/popupType'

export interface PopupMessage {
	type: PopupType
	message: string
	stack?: string
}
