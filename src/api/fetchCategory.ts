import { BASE_URL } from '@/api';

const fetchCategory = async <T>(
	resourceType: string,
	limit = 20,
	offset = 0
): Promise<T[]> => {
	const url = new URL(`${BASE_URL}/${resourceType}/`);
	url.searchParams.set('limit', limit.toString());
	url.searchParams.set('offset', offset.toString());

	const res = await fetch(url.toString());
	if (!res.ok) throw new Error('Failed to fetch category');
	const json = await res.json();
	return json.results as T[];
};

export default fetchCategory;
