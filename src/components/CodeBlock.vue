<template>
	<div>
		<code class="position-relative">
			<pre class="pa-2 rounded text-left overflow-auto" :style="style">
 {{ code }}</pre
			>
			<CopyButton :text-to-copy="code" :disable-copy="disableCopy" />
		</code>
	</div>
</template>
<script setup lang="ts">
import { StyleValue } from 'vue'

defineProps<{
	code: string
	disableCopy?: boolean
	inheritClass?: string
	style?: StyleValue
}>()
</script>
