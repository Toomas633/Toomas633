<template>
	<v-chip
		class="font-weight-bold"
		prepend-icon="mdi-archive"
		variant="outlined"
		size="large"
		color="orange"
		@click="handleClick">
		<v-tooltip
			v-if="isDesktop"
			activator="parent"
			aria-label="Click to copy"
			location="left"
			class="font-weight-bold">
			Replaced by {{ newPage }}
		</v-tooltip>
		Archived
	</v-chip>
	<v-dialog v-model="showDialog" max-width="400">
		<v-card class="bg-background">
			<v-card-title class="text-h5 bg-black pa-3">
				<v-icon icon="mdi-archive" /> This page was replaced by:
			</v-card-title>
			<v-card-text class="d-flex align-items-center">
				<v-icon icon="mdi-help-circle-outline" class="mr-1" /> {{ newPage }}
			</v-card-text>
			<v-card-actions>
				<v-btn variant="text" @click="showDialog = false">Cancel</v-btn>
				<v-btn variant="text" color="success" :href="newLink">Navigate</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
<script setup lang="ts">
import router from '@/router'
import { isDesktop } from '@basitcodeenv/vue3-device-detect'
import { ref } from 'vue'

const props = defineProps<{
	newPage: string
	newLink: string
}>()

const showDialog = ref(false)

function handleClick() {
	if (!isDesktop) {
		showDialog.value = true
	} else {
		router.push(props.newLink)
	}
}
</script>
