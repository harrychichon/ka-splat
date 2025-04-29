export const ERROR_MESSAGES = {
	api: {
		missingApiKey: 'Missing API key.',
		fetchFailed: 'Failed to fetch data.',
		proxyError: 'Proxy server error: unable to fetch from ComicVine.',
	},
	search: {
		emptyQuery: 'Search query can not be empty.',
		noResults: (query: string) => `No issues found for: ${query}.`,
	},
	general: {
		unknown: 'An unknown error occurred.',
		notFound: 'The requested resource could not be found.',
		network: 'Network error. Please check your internet connection.',
	},
	debug: {
		invalidComicVineUrl: (apiDetailUrl: string) =>
			`Invalid ComicVine URL: ${apiDetailUrl}.`,
		entityFetchFailed: (url: string) => `Failed to fetch entity at ${url}.`,
		searchEntityError: 'searchEntity error:',
		searchFetchFailed: 'Failed to fetch search results',
		searchQueryFailed: 'searchQuery error:',
	},
};
