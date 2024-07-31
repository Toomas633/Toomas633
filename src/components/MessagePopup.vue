<template>
	<v-card :color="color" style="z-index: 1000" class="message-popup">
		<div class="d-flex" style="justify-content: space-between">
			<v-card-title class="d-inline-block">
				<v-icon :icon="icon" /> {{ title }}
			</v-card-title>
			<v-btn flat icon="mdi-close" @click="emit('close')" />
		</div>
		<v-card-text class="pt-0">
			{{ message.message }}
		</v-card-text>
	</v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PopupType } from '@/enums/popupType'
import { PopupMessage } from '@/interfaces/popup'

const props = defineProps<{
	message: PopupMessage
}>()

const emit = defineEmits(['close'])

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
</script>

<style scoped>
.message-popup {
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	min-width: 25rem;
	min-height: 6.25rem;
}
</style>
