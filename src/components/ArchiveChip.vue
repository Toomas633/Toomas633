<template>
	<v-chip
		v-if="isDesktop"
		class="font-weight-bold"
		prepend-icon="mdi-archive"
		variant="outlined"
		size="large"
		color="orange"
		:href="newLink">
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
	<v-btn
		v-else
		icon="mdi-archive"
		variant="outlined"
		density="compact"
		color="orange"
		size="large"
		class="mr-2 ml-n10"
		@click="showDialog = true">
	</v-btn>
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
import { isDesktop } from '@basitcodeenv/vue3-device-detect'
import { ref } from 'vue'

defineProps<{
	newPage: string
	newLink: string
}>()

const showDialog = ref(false)
</script>
