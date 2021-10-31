const MODE = {
	DEVELOPMENT: 'development',
	PRODUCTION: 'production',
}

const CURRENT_MODE = MODE.DEVELOPMENT

const BASE_URLS = {
	development: {
		socketBaseUrl: 'http://localhost:8000',
	},
	production: {
		socketBaseUrl: 'https://infini8.herokuapp.com',
	},
}

export const { socketBaseUrl } = BASE_URLS[CURRENT_MODE]
