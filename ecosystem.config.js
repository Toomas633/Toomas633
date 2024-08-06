module.exports = {
	apps: [
		{
			name: 'frontend',
			script: 'nginx',
			args: "-g 'daemon off;'",
		},
		{
			name: 'backend',
			script: 'node',
			args: 'backend/server.js',
		},
	],
}
