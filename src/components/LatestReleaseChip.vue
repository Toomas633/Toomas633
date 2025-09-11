<template>
	<v-chip
		class="font-weight-bold"
		prepend-icon="mdi-update"
		variant="outlined"
		size="large"
		color="light-green">
		<v-icon v-if="loading" icon="mdi-loading" class="mdi-spin" />
		<p v-else>{{ release }}</p>
	</v-chip>
</template>
<script setup lang="ts">
import { getLatestRelease } from '@/services/githubService'
import { onMounted, ref } from 'vue'

const porps = defineProps<{
	repo: string
}>()

const loading = ref(true)

const release = ref<string | undefined>(undefined)

onMounted(async () => {
	release.value = await getLatestRelease(porps.repo).then((resp) => {
		loading.value = false
		return resp
	})
})
</script>
