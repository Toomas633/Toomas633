<template>
	<code class="position-relative" @mousedown="copy">
		<mark>{{ code }}</mark>
	</code>
	<MessagePopup v-if="showPopup" :message="popupMessage!" @close="closePopup" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MessagePopup from './MessagePopup.vue'
import useAlertMixin from '@/helpers/alertMixin'
import { PopupMessage } from '@/types/popup'

const props = defineProps<{
	code: string
	disableCopy?: boolean
}>()

const popupMessage = ref<PopupMessage | undefined>(undefined)
const showPopup = ref(false)

const { showErrorMessage, showSuccessMessage } = useAlertMixin()

const copy = async () => {
	try {
		await navigator.clipboard.writeText(props.code)
		showSuccessMessage('Code copied to clipboard', popupMessage, showPopup)
	} catch (error) {
		showErrorMessage(error as Error, popupMessage, showPopup)
	}
}

const closePopup = () => {
	showPopup.value = false
}
</script>
<style scoped>
mark {
	background-color: rgb(var(--v-theme-secondary));
	color: white;
	overflow-wrap: break-word;
	white-space: pre-line;
	padding-left: 0.25rem;
	padding-right: 0.25rem;
	cursor: pointer;
}
</style>
