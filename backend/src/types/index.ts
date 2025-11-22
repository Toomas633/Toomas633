export interface EmailConfig {
	host: string
	user: string
	password: string
	to: string
	port: number
	requireTLS: boolean
}

export interface ServerConfig {
	port: number
}

export interface AllowedOriginsConfig {
	origins: string[]
}

export interface AppConfig {
	email: EmailConfig
	server: ServerConfig
	allowedOrigins: AllowedOriginsConfig
}

export interface ContactFormData {
	name: string
	email: string
	subject: string
	message: string
}

export interface ApiResponse<T = unknown> {
	success: boolean
	message?: string
	data?: T
	error?: string
}

export interface ErrorResponse {
	error: string
	message: string
}
