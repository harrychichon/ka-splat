import { ERROR_MESSAGES, SEARCH_ENDPOINT } from '@/constants';
import { SearchQueryResult } from '@/types';

const searchQuery = async <T>(
	query: string,
	options?: { resources?: string[]; limit?: number; offset?: number }
): Promise<SearchQueryResult<T>> => {
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

		const res = await fetch(`${SEARCH_ENDPOINT}?${searchParams}`);
		console.log('Fetched from: ', res.url);
		if (!res.ok) {
			throw new Error(ERROR_MESSAGES.debug.searchFetchFailed);
		}
		const json = await res.json();
		console.log('Res json: ', json);
		return {
			results: json.results ?? [],
			total: json.number_of_total_results ?? 0,
		};
	} catch (error) {
		console.error(ERROR_MESSAGES.debug.searchQueryFailed, error);
		return { results: [], total: 0 };
	}
};

export default searchQuery;
