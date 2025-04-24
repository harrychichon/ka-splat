import { searchQuery } from '@/api';
import { useEffect, useState } from 'react';

const cache = new Map<string, unknown[]>();

const useSearchQuery = <T>(query: string) => {
	const [data, setData] = useState<T[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!query) {
			setData(null);
			setLoading(false);
			return;
		}

		const cached = cache.get(query);
		if (cached) {
			setData(cached as T[]);
			setLoading(false);
			return;
		}

		setLoading(true);
		searchQuery<T>(query)
			.then((results) => {
				cache.set(query, results);
				setData(results);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, [query]);

	return { data, loading, error };
};

export default useSearchQuery;
