<template>
	<v-card :color="color" style="z-index: 1000" class="message-popup">
		<div class="d-flex" style="justify-content: space-between">
			<v-card-title class="d-inline-block">
				<v-icon :icon="icon" /> {{ title }}
			</v-card-title>
			<v-btn variant="flat" icon="mdi-close" @click="emit('close')" />
		</div>
		<v-card-text class="pt-0 pb-0">
			{{ message.message }}
		</v-card-text>
		<div v-if="message.stack">
			<v-btn variant="flat" @click="toggleStackTrace">
				<v-icon>{{
					showStack ? 'mdi-chevron-down' : 'mdi-chevron-right'
				}}</v-icon>
				<span>Stack Trace</span>
			</v-btn>
			<v-card-text v-if="showStack" class="stack-trace pa-2">
				<pre class="pa-2">{{ formattedStack }}</pre>
			</v-card-text>
		</div>
	</v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { PopupType } from '@/enums/popupType'
import { PopupMessage } from '@/types/popup'

const props = defineProps<{
	message: PopupMessage
}>()

const emit = defineEmits(['close'])

const showStack = ref(false)

const toggleStackTrace = () => {
	showStack.value = !showStack.value
}

const title = computed(() => {
	switch (props.message?.type) {
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
	switch (props.message?.type) {
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
	switch (props.message?.type) {
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
		props.message.stack
			?.split('\n')
			.map((line) => line.trim())
			.join('\n') || ''
	)
})
</script>
