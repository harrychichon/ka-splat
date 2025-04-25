import { searchQuery } from '@/api';
import { useEffect, useState } from 'react';

const cache = new Map<string, unknown[]>();

const useSearchQuery = <T>(query: string, limit: number, offset: number) => {
	const [data, setData] = useState<T[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!query) {
			setData(null);
			setLoading(false);
			return;
		}
		const cacheKey = `${query}|offset=${offset}|limit=${limit}`;
		const cached = cache.get(cacheKey);
		if (cached) {
			setData(cached as T[]);
			setLoading(false);
			return;
		}

		setLoading(true);
		searchQuery<T>(query, {
			resources: ['issue'],
			limit: limit,
			offset: offset,
		})
			.then((results) => {
				cache.set(query, results);
				setData(results);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, [limit, offset, query]);

	return { data, loading, error };
};

export default useSearchQuery;
