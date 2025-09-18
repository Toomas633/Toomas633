<template>
	<v-card
		v-show="showPopup"
		:color="color"
		class="position-fixed"
		:class="isDesktop ? 'message-popup-desktop' : 'message-popup-mobile'">
		<div class="d-flex" style="justify-content: space-between">
			<v-card-title class="d-inline-block">
				<v-icon :icon="icon" /> {{ title }}
			</v-card-title>
			<v-btn
				variant="flat"
				icon="mdi-close"
				:color="color"
				@click="closePopup" />
		</div>
		<v-card-text class="pt-0 pb-0 text-start">
			{{ message?.message }}
		</v-card-text>
		<div v-if="message?.stack">
			<v-btn variant="flat" @click="toggleStackTrace">
				<v-icon>
					{{ showStack ? 'mdi-chevron-down' : 'mdi-chevron-right' }}
				</v-icon>
				<span>Stack Trace</span>
			</v-btn>
			<v-card-text v-if="showStack" class="pa-2 overflow-auto mt-n5">
				<CodeBlock
					class="overflow-auto height-100"
					:code="formattedStack"
					:disable-copy="true"
					:top-margin="true"
					style="max-height: 12.688rem" />
			</v-card-text>
		</div>
	</v-card>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { PopupType } from '@/enums/popupType'
import { PopupMessage } from '@/types/popup'
import { EventType } from '@/enums/eventType'
import { EventBus } from '@/util/eventBus'
import useTimerMixin from '@/helpers/timerMixin'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

const showPopup = ref(false)
const message = ref<PopupMessage>()
const showStack = ref(false)

const alertEvent = EventType.SHOW_ALERT_MESSAGE

const { timer } = useTimerMixin()

onMounted(() => EventBus.on(alertEvent, onAlertMessage))

const toggleStackTrace = () => {
	showStack.value = !showStack.value
}

const title = computed(() => {
	switch (message.value?.type) {
		case PopupType.Error:
			return 'Error'
		case PopupType.Warn:
			return 'Warning'
		case PopupType.Info:
			return 'Info'
		case PopupType.Success:
			return 'Success'
		default:
			return 'Notice'
	}
})

const color = computed(() => {
	switch (message.value?.type) {
		case PopupType.Error:
			return 'red'
		case PopupType.Warn:
			return 'yellow'
		case PopupType.Info:
			return 'blue'
		case PopupType.Success:
			return 'green'
		default:
			return 'grey'
	}
})

const icon = computed(() => {
	switch (message.value?.type) {
		case PopupType.Error:
			return 'mdi-alert'
		case PopupType.Warn:
			return 'mdi-alert-outline'
		case PopupType.Info:
			return 'mdi-information'
		case PopupType.Success:
			return 'mdi-check-circle'
		default:
			return 'mdi-alert-circle-outline'
	}
})

const formattedStack = computed(() => {
	return (
		message.value?.stack
			?.split('\n')
			.map((line) => line.trim())
			.join('\n') || ''
	)
})

const closePopup = () => {
	showPopup.value = false
	showStack.value = false
}

function onAlertMessage(event: PopupMessage) {
	showStack.value = false
	message.value = event
	if (event.stack) {
		showPopup.value = true
	} else {
		timer((value: boolean) => {
			showPopup.value = value
		}, 5000)
	}
}

onUnmounted(() => EventBus.off(alertEvent, onAlertMessage))
</script>
<style scoped lang="scss">
.message-popup-desktop {
	right: calc(0.5rem + var(--scrollbar-offset)) !important;
	bottom: calc(var(--footer-height) + 0.25rem) !important;
	min-width: 20rem;
	min-height: 5rem;
	max-width: 37rem;
	max-height: 20rem;
}

.message-popup-mobile {
	right: 0;
	bottom: var(--footer-height);
	max-width: 100%;
}
</style>
