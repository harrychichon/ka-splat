import { API_KEY, SEARCH_ENDPOINT } from '@/constants';

const searchQuery = async <T>(
	query: string,
	options?: { resources?: string[]; limit?: number; offset?: number }
): Promise<T[]> => {
	try {
		const apiKey = API_KEY;
		if (!apiKey) throw new Error('Missing API key');
		const searchParams = new URLSearchParams({
			query,
			format: 'json',
			api_key: apiKey,
		});
		if (options?.resources) {
			searchParams.append('resources', options.resources.join(','));
		}
		if (options?.limit) {
			searchParams.append('limit', options.limit.toString());
		}
		if (options?.offset) {
			searchParams.append('offset', options.offset.toString());
		}

		const res = await fetch(`${SEARCH_ENDPOINT}${searchParams}`);
		if (!res.ok) {
			throw new Error('Failed to fetch search results');
		}
		const json = await res.json();
		return json.results ?? [];
	} catch (error) {
		console.error('searchQuery error:', error);
		return [];
	}
};

export default searchQuery;
