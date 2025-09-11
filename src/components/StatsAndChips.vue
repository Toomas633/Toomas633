<template>
	<div class="chips">
		<LicenseChip :repo="repo" />
		<ArchiveChip
			v-if="newPage && newLink"
			:new-page="newPage"
			:new-link="newLink" />
		<LatestReleaseChip :repo="repo" />
	</div>
	<LangGraph v-if="!hideLangs" :repo="repo" />
</template>
<script setup lang="ts">
import ArchiveChip from './ArchiveChip.vue'
import LangGraph from './LangGraph.vue'
import LatestReleaseChip from './LatestReleaseChip.vue'
import LicenseChip from './LicenseChip.vue'

defineProps<{
	repo: string
	newPage?: string
	newLink?: string
	hideLangs?: boolean
}>()
</script>
<style lang="scss" scoped>
.chips {
	text-align: center;
	margin-bottom: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.5rem;
}
</style>
