import { API_KEY, BASE_URL } from '@/api';

const fetchEntity = async <T>(resourceType: string, id: number): Promise<T> => {
	const res = await fetch(
		`${BASE_URL}/${resourceType}/${id}/?api_key=${API_KEY}&format=json`
	);
	if (!res.ok) throw new Error('Failed to fetch entity');
	const json = await res.json();
	return json.results as T;
};

export default fetchEntity;
