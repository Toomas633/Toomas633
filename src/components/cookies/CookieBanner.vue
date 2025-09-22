<template>
	<v-banner
		class="bg-background border z-top"
		elevation="10"
		icon="mdi-cookie"
		stacked
		position="fixed"
		location="bottom">
		<template #text>
			We use cookies to make our site work, improve performance, and deliver
			relevant content and ads. You can accept all, reject non-essential, or
			customize your choices. For more details see our
			<LinkComponent text="Privacy Policy" href="/privacy" />.
		</template>
		<template #actions>
			<div class="actions pr-4">
				<v-btn variant="outlined" color="red" @click="decline"> Deny </v-btn>
				<v-btn
					class="mx-4"
					variant="outlined"
					color="success"
					@click="emit('showSelection')">
					Customize <v-icon icon="mdi-chevron-right" />
				</v-btn>
				<v-btn variant="flat" color="success" @click="acceptAll">
					Accept All
				</v-btn>
			</div>
		</template>
	</v-banner>
</template>
<script lang="ts" setup>
import useCookieMixin from '@/helpers/cookieMixin'

const emit = defineEmits<{
	(e: 'update:visible', value: boolean): void
	(e: 'showSelection', value: void): void
}>()

const { acceptAllCookies, declineCookies } = useCookieMixin()

function acceptAll() {
	acceptAllCookies()
	close()
}

function decline() {
	declineCookies()
	close()
}

function close() {
	emit('update:visible', false)
}
</script>
<style scoped lang="scss">
.actions {
	margin-left: calc(calc(100vw - 56px) * -1);
}

.z-top {
	z-index: 2000;
}
</style>
