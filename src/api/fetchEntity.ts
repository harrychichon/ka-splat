import { BASE_URL } from '@/api';

const fetchEntity = async <T>(resourceType: string, id: number): Promise<T> => {
	const url = `${BASE_URL}/${resourceType}/${id}/`;

	const res = await fetch(url);
	if (!res.ok) throw new Error('Failed to fetch entity');
	const json = await res.json();
	return json.results as T;
};

export default fetchEntity;
