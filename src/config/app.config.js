const MODE = {
	DEVELOPMENT: 'development',
	PRODUCTION: 'production',
}

const CURRENT_MODE = MODE.PRODUCTION

const BASE_URLS = {
	development: {
		socketBaseUrl: 'http://localhost:8000',
	},
	production: {
		socketBaseUrl: 'https://infini8.onrender.com',
	},
}

export const { socketBaseUrl } = BASE_URLS[CURRENT_MODE]
