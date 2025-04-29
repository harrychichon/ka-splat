import { ERROR_MESSAGES, SEARCH_ENDPOINT } from '@/constants';

const searchQuery = async <T>(
	query: string,
	options?: { resources?: string[]; limit?: number; offset?: number }
): Promise<T[]> => {
	try {
		const searchParams = new URLSearchParams({
			query,
			format: 'json',
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
			throw new Error(ERROR_MESSAGES.debug.searchFetchFailed);
		}
		const json = await res.json();
		return json.results ?? [];
	} catch (error) {
		console.error(ERROR_MESSAGES.debug.searchQueryFailed, error);
		return [];
	}
};

export default searchQuery;
