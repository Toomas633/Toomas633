<template>
	<v-tabs v-model="tab" align-tabs="center" class="bg-black" grow stacked>
		<v-tab :value="Tabs.Status"> <v-icon icon="mdi-minecraft" /> Status </v-tab>
		<v-tab :value="Tabs.Statistics">
			<v-icon icon="mdi-poll" /> Statistics
		</v-tab>
		<v-tab :value="Tabs.Map"> <v-icon icon="mdi-map" /> Map </v-tab>
	</v-tabs>
	<v-tabs-window
		v-model="tab"
		class="v-tabs-wrapper"
		:style="backgroundImageStyle">
		<v-tabs-window-item :value="Tabs.Status" class="overflow-auto">
			<v-card class="ma-4 bg-black align-center w-75 mx-auto position-relative">
				<v-container class="d-flex justify-center">
					<div class="card-title d-flex">
						<v-img src="/logo.svg" height="76" width="76" class="mr-2" />
						<div v-if="loading">
							<h3 class="light-blue">
								<v-icon :icon="loadingIcon" /> Loading...
							</h3>
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
								<CopyButton
									class="ml-1"
									:text-to-copy="server"
									:inline="true" />
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
								<v-icon class="mr-1 pb-1" icon="mdi-account-group" /> Players
								online
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
							rounded />
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
									<img :src="player.avatar" alt="Avatar" class="mr-1" />
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
									<v-tooltip activator="parent" location="bottom">
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
				<v-container v-if="online && !loading">
					<div class="expand" @click="showPlugins = !showPlugins">
						<div class="d-flex justify-space-between">
							<h4 class="text-center">
								<v-icon icon="mdi-connection" /> Plugins
							</h4>
							<p>
								{{ data?.plugins?.length }}
								<v-icon
									:icon="showPlugins ? 'mdi-chevron-up' : 'mdi-chevron-down'" />
							</p>
						</div>
						<v-divider thickness="2" class="border-opacity-100" />
					</div>
					<v-expand-transition>
						<v-row v-show="showPlugins" class="mt-0 pa-2">
							<v-col
								v-for="(plugin, index) in data?.plugins"
								:key="index"
								cols="auto">
								<p>
									{{ plugin.name }}
									<v-tooltip activator="parent" location="bottom">
										{{ plugin.version }}
									</v-tooltip>
								</p>
							</v-col>
						</v-row>
					</v-expand-transition>
				</v-container>
				<v-btn
					variant="plain"
					:ripple="false"
					icon="mdi-refresh"
					class="position-absolute top-0 right-0"
					:loading="loading"
					@click="queryData" />
			</v-card>
		</v-tabs-window-item>
		<v-tabs-window-item :value="Tabs.Statistics" class="h-100 z-top">
			<iframe
				title="Grafana"
				class="grafana"
				height="100"
				src="https://grafana.toomas633.com/public-dashboards/b6001832311f480fa0a153c29aadb839" />
		</v-tabs-window-item>
		<v-tabs-window-item :value="Tabs.Map" class="h-100 z-top">
			<iframe title="Map" src="https://map.toomas633.com" allowfullscreen />
		</v-tabs-window-item>
	</v-tabs-window>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
	queryMinecraftAvatar,
	queryMinecraftStatus,
} from '@/services/minecraftService'
import { RequestStatus } from '@/enums/requestStatus'
import { MinecraftData, PlayerList } from '@/types/minecraftStatus'
import { Tabs } from '@/enums/minecraft'
import useLoadingMixin from '@/helpers/loadingMixin'
import { Player } from '@/types/minecraftPlayer'
import useAlertMixin from '@/helpers/alertMixin'
import InlineTextCopy from '@/components/InlineTextCopy.vue'
import CopyButton from '@/components/CopyButton.vue'
import background from '@/assets/images/Minecraft/background.jpg'

const tab = ref<Tabs>(Tabs.Status)
const loading = ref(true)
const data = ref<MinecraftData>()
const online = ref(false)
const players = ref<Player[]>([])
const showPlugins = ref(false)
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

onMounted(() => {
	queryData()
})

const motd = computed(() => {
	return data.value?.motd?.html[0]
})

const backgroundImageStyle = computed(() => {
	return {
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}
})

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
<style>
.card-title {
	width: 15.313rem;
}

.expand {
	cursor: pointer;
}

.z-top {
	z-index: 1;
}

h3 {
	width: 10.5rem;
}

iframe {
	width: 100%;
	height: 100%;
	border: none;
}

/* stylelint-disable selector-class-pattern */
.v-window__container {
	height: 100% !important;
}
</style>
