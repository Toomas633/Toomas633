export const objectToString = (obj: Record<string, unknown>): string => {
	return Object.entries(obj)
		.map(([key, value]) => `${key}: ${value}`)
		.join(',')
}

export const logWithTimestamp = (
	level: 'info' | 'warn' | 'error',
	message: string,
	duration: number | null = null
): void => {
	const timestamp = new Date().toISOString()
	const durationText = duration ? ` in ${duration}ms` : ''

	switch (level) {
		case 'info':
			console.info(`[${timestamp}] INFO: ${message}${durationText}`)
			break
		case 'warn':
			console.warn(`[${timestamp}] WARN: ${message}${durationText}`)
			break
		case 'error':
			console.error(`[${timestamp}] ERROR: ${message}${durationText}`)
			break
	}
}
