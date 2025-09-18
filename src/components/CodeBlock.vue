<template>
	<code class="position-relative">
		<pre
			class="pa-2 rounded text-left overflow-auto"
			:class="topMargin ? 'mt-4' : ''"
			:style="style">
 {{ code }} </pre
		>
		<CopyButton
			:style="topMargin ? '' : 'top: 1.75rem;'"
			:text-to-copy="code"
			:disable-copy="disableCopy" />
	</code>
</template>
<script setup lang="ts">
import { StyleValue } from 'vue'

defineProps<{
	code: string
	disableCopy?: boolean
	inheritClass?: string
	style?: StyleValue
	topMargin?: boolean
}>()
</script>
