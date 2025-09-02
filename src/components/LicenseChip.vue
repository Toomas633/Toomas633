<template>
	<v-chip
		class="font-weight-bold"
		prepend-icon="mdi-license"
		variant="outlined"
		size="large"
		color="orange"
		:text="license?.name">
	</v-chip>
</template>
<script setup lang="ts">
import { getLicence } from '@/services/githubService'
import { License } from '@/types/github'
import { onMounted, ref } from 'vue'

const porps = defineProps<{
	repo: string
}>()

const license = ref<License | undefined>(undefined)

onMounted(async () => {
	license.value = await getLicence(porps.repo)
})
</script>
