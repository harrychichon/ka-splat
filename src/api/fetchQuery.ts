import { API_KEY, BASE_URL } from '@/api';

const fetchQuery = async <T>(
	query: string,
	resourceTypeId?: number
): Promise<T[]> => {
	const resourceFilter = resourceTypeId ? `&resources=${resourceTypeId}` : '';

	const res = await fetch(
		`${BASE_URL}/search/?api_key=${API_KEY}&format=json&query=${encodeURIComponent(
			query
		)}${resourceFilter}`
	);
	if (!res.ok) throw new Error('Failed to perform search');
	const json = await res.json();
	return json.results as T[];
};

export default fetchQuery;
