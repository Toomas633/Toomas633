// Simple user-agent bot detection.
// This runs client-side; for SSR or server logs you would inspect request headers.
// List focuses on major search engines and common crawlers; extend as needed.

// Consolidated single-line regex (multiline version caused syntax issues in TS parsing)
const BOT_REGEX =
	/(bot|crawler|spider|crawling|curl|python-requests|Go-http-client|wget|facebookexternalhit|Discordbot|Slackbot|TelegramBot|LinkedInBot|Twitterbot|bingpreview)/i

export function isBotUserAgent(ua?: string): boolean {
	if (globalThis.window === undefined) return true // Assume bot in non-browser contexts (defensive)
	const agent = ua || navigator.userAgent || ''
	return BOT_REGEX.test(agent)
}

export default isBotUserAgent
