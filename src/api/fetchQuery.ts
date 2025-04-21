import { BASE_URL } from '@/api';

const fetchQuery = async <T>(
	query: string,
	resourceTypeId?: number
): Promise<T[]> => {
	const params = new URLSearchParams({ query });

	if (resourceTypeId) {
		params.set('resources', resourceTypeId.toString());
	}

	const res = await fetch(`${BASE_URL}?${params.toString()}`);
	if (!res.ok) throw new Error('Failed to perform search');

	const json = await res.json();
	return json.results as T[];
};

export default fetchQuery;
