import { BASE_URL } from './api';

const searchQuery = async <T = unknown>(query: string): Promise<T[]> => {
	const url = `${BASE_URL}/search/?query=${encodeURIComponent(
		query
	)}&resources=issue`;
	const res = await fetch(url);
	const data = await res.json();
	return data.results;
};

export default searchQuery;
