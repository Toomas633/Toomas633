<template>
	<v-card class="align-center mx-auto position-relative transparent-bg">
		<v-container class="d-flex justify-center">
			<div class="d-flex" style="width: 15.313rem">
				<v-img
					src="/logo.svg"
					height="76"
					width="76"
					class="mr-2 bg-black rounded-circle"
					alt="Server logo" />
				<div v-if="loading">
					<h3 class="light-blue"><v-icon :icon="loadingIcon" /> Loading...</h3>
				</div>
				<div v-else class="d-block">
					<h3 :class="online ? 'green' : 'red'">
						<v-icon
							:icon="online ? 'mdi-signal' : 'mdi-signal-off'"
							size="small" />
						{{ data?.online ? 'Server is online' : 'Server is offline' }}
					</h3>
					<div class="d-flex">
						<InlineTextCopy class="my-auto" :text="server" />
						<CopyButton class="ml-1" :text-to-copy="server" :inline="true" />
					</div>
					<!-- eslint-disable-next-line vue/no-v-html -->
					<div v-html="motd"></div>
				</div>
			</div>
		</v-container>
		<v-container v-if="online && !loading">
			<div
				:class="players.length ? 'expand' : ''"
				@click="players.length ? (showPlayers = !showPlayers) : null">
				<div class="d-flex justify-space-between">
					<h4>
						<v-icon class="mr-1 pb-1" icon="mdi-account-group" /> Players online
					</h4>
					<v-icon
						v-if="players.length"
						:icon="showPlayers ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
				</div>
				<v-progress-linear
					:model-value="data?.players?.online"
					min="0"
					:max="data?.players?.max"
					color="green"
					:height="7"
					rounded
					aria-label="Player progress bar" />
				<p class="text-center">
					{{ data?.players?.online }} /
					{{ data?.players?.max }}
				</p>
				<v-expand-transition>
					<v-row v-show="showPlayers" class="mt-0 pa-2">
						<v-col
							v-for="(player, index) in players"
							:key="index"
							class="d-flex align-center pa-2"
							cols="auto">
							<v-img
								:src="player.avatar"
								height="25"
								width="25"
								alt="Avatar"
								class="mr-1" />
							<p>{{ player.name }}</p>
						</v-col>
					</v-row>
				</v-expand-transition>
			</div>
		</v-container>
		<v-container v-if="online && !loading" class="mb-4">
			<h4><v-icon icon="mdi-server" /> Server stats</h4>
			<v-divider thickness="2" class="border-opacity-100" />
			<v-row class="pa-2">
				<v-col>
					<div class="pa-1 d-flex justify-space-between">
						<p>Version</p>
						<p>
							{{ data?.version }}
							<v-tooltip
								activator="parent"
								location="bottom"
								aria-label="Precise version tooltip">
								{{ data?.software }}
							</v-tooltip>
						</p>
					</div>
					<v-divider thickness="2" class="border-opacity-100" />
					<div class="pa-1 d-flex justify-space-between">
						<p>Protocol</p>
						<p>
							{{ data?.protocol?.version }}
						</p>
					</div>
					<v-divider thickness="2" class="border-opacity-100" />
					<div class="pa-1 d-flex justify-space-between">
						<p>IP</p>
						<InlineTextCopy :text="ip" />
					</div>
				</v-col>
			</v-row>
		</v-container>
		<v-btn
			variant="plain"
			:ripple="false"
			icon="mdi-refresh"
			class="position-absolute top-0 right-0"
			:loading="loading"
			aria-label="Refresh server status"
			@click="queryData" />
	</v-card>
</template>
<script setup lang="ts">
import { RequestStatus } from '@/enums/requestStatus'
import useAlertMixin from '@/helpers/alertMixin'
import useLoadingMixin from '@/helpers/loadingMixin'
import {
	queryMinecraftAvatar,
	queryMinecraftStatus,
} from '@/services/minecraftService'
import { MinecraftData, Player, PlayerList } from '@/types/minecraft'
import { computed, onMounted, ref } from 'vue'

const loading = ref(true)
const data = ref<MinecraftData>()
const online = ref(false)
const players = ref<Player[]>([])
const showPlayers = ref(false)
const ip = ref('...')

const server = 'vanilla.toomas633.com'

const loadingIcons = [
	'mdi-signal-cellular-outline',
	'mdi-signal-cellular-1',
	'mdi-signal-cellular-2',
	'mdi-signal-cellular-3',
	'mdi-signal-cellular-2',
	'mdi-signal-cellular-1',
	'mdi-signal-cellular-outline',
]

const { loadingIcon } = useLoadingMixin(loadingIcons)
const { showErrorMessage } = useAlertMixin()

const motd = computed(() => {
	return data.value?.motd?.html[0]
})

onMounted(queryData)

async function queryData() {
	loading.value = true
	try {
		const response = await queryMinecraftStatus(server)
		if (response.status === RequestStatus.success) {
			data.value = response.data
			online.value = response.data.online
			ip.value = makeIp(response.data.ip, response.data.port)
			if (response.data.players?.list?.length) {
				players.value = await createPlayers(response.data.players.list)
			}
			loading.value = false
		} else {
			loading.value = false
			console.error(response.statusText)
		}
	} catch (error) {
		loading.value = false
		showErrorMessage(error as Error)
	}
}

function makeIp(ip: string, port: number) {
	return `${ip}:${port}`
}

async function createPlayers(players: PlayerList[]): Promise<Player[]> {
	return await Promise.all(
		players.map(async (player: PlayerList) => {
			let avatar = ''
			try {
				avatar = URL.createObjectURL(
					(await queryMinecraftAvatar(player.name)).data
				)
			} catch (error) {
				showErrorMessage(error as Error)
			}

			return { ...player, avatar }
		})
	)
}
</script>
<style scoped lang="scss">
h3 {
	width: 10.5rem;
}

.transparent-bg {
	background-color: rgb(255 255 255 / 75%) !important;
}

/* stylelint-disable selector-class-pattern */
.v-theme--darkTheme .transparent-bg {
	background-color: rgb(0 0 0 / 75%) !important;
}
/* stylelint-enable selector-class-pattern */
</style>
