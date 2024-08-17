import axios from 'axios'
import { MinecraftStatusResponse } from '@/types/minecraftStatus'

export function queryMinecraftStatus(
	serverIp: string
): Promise<MinecraftStatusResponse> {
	return axios.get(`https://api.mcsrvstat.us/3/${serverIp}`)
}

export function queryMinecraftAvatar(name: string) {
	return axios.get(`https://minotar.net/avatar/${name}/25`, {
		responseType: 'blob',
	})
}
