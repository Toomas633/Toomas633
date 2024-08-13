<template>
	<v-btn
		v-if="!disableCopy && isDesktop"
		:icon="copied ? 'mdi-check' : 'mdi-content-copy'"
		class="position-absolute"
		:class="hover ? 'hover' : 'top-right'"
		variant="plain"
		:ripple="false"
		rounded="0"
		density="compact"
		@click="copy" />
	<MessagePopup v-if="showPopup" :message="popupMessage!" @close="closePopup" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MessagePopup from './MessagePopup.vue'
import useAlertMixin from '@/helpers/alertMixin'
import useTimerMixin from '@/helpers/timerMixin'
import type { PopupMessage } from '@/types/popup'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'

const props = defineProps<{
	textToCopy: string
	hover?: boolean
	disableCopy?: boolean
}>()

const copied = ref(false)
const popupMessage = ref<PopupMessage | undefined>(undefined)
const showPopup = ref(false)

const { showErrorMessage } = useAlertMixin()
const { timer } = useTimerMixin()

const closePopup = () => {
	showPopup.value = false
}

const copy = async () => {
	try {
		await navigator.clipboard.writeText(props.textToCopy)
		copied.value = true
		timer((value: boolean) => {
			copied.value = value
		}, 2000)
	} catch (error) {
		showErrorMessage(error as Error, popupMessage, showPopup)
	}
}
</script>
<style scoped>
.top-right {
	top: 3rem;
	right: 0.5rem;
}

.hover {
	background-color: black;
	top: -0.219rem;
	right: -1.75rem;
}
</style>
