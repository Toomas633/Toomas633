import { EventType } from '@/enums/eventType'
import { PopupMessage } from '@/types/popup'
import mitt from 'mitt'

type EventMap = {
	[EventType.SHOW_ALERT_MESSAGE]: PopupMessage
}

export const EventBus = mitt<EventMap>()
