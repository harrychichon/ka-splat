import { API_KEY, BASE_URL } from '@/api';

const fetchCategory = async <T>(
	resourceType: string,
	limit = 20,
	offset = 0
): Promise<T[]> => {
	const res = await fetch(
		`${BASE_URL}/${resourceType}/?api_key=${API_KEY}&format=json&limit=${limit}&offset=${offset}`
	);
	if (!res.ok) throw new Error('Failed to fetch category');
	const json = await res.json();
	return json.results as T[];
};

export default fetchCategory;
