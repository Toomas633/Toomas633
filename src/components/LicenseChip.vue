<template>
	<v-chip
		class="font-weight-bold"
		prepend-icon="mdi-license"
		variant="outlined"
		size="large"
		color="orange">
		<v-icon v-if="loading" icon="mdi-loading" class="mdi-spin" />
		<p v-else>{{ license?.name }}</p>
	</v-chip>
</template>
<script setup lang="ts">
import { getLicence } from '@/services/githubService'
import { License } from '@/types/github'
import { onMounted, ref } from 'vue'

const porps = defineProps<{
	repo: string
}>()

const loading = ref(true)

const license = ref<License | undefined>(undefined)

onMounted(async () => {
	license.value = await getLicence(porps.repo).then((resp) => {
		loading.value = false
		return resp
	})
})
</script>
