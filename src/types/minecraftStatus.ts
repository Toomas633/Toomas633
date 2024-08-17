import { AxiosHeaders } from 'axios'

export interface MinecraftStatusResponse {
	config: object
	data: MinecraftData
	headers: AxiosHeaders
	request: XMLHttpRequest
	status: number
	statusText: string
}

export interface MinecraftData {
	debug: object
	eula_blocked?: boolean
	hostname: string
	icon?: string
	ip: string
	map?: string
	motd?: Motd
	online: boolean
	players?: Players
	plugins?: Plugin[]
	port: number
	protocol?: Protocol
	software?: string
	version?: string
}

interface Motd {
	clean: string[]
	html: string[]
	raw: string[]
}

interface Players {
	list?: PlayerList[]
	max: number
	online: number
}

interface Protocol {
	name: string
	version: string
}

export interface PlayerList {
	name: string
	uuid: string
}

interface Plugin {
	name: string
	version: string
}
