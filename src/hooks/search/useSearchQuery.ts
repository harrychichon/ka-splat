'use client';

import { searchQuery } from '@/services';
import { useUIStore } from '@/stores';
import { useEffect, useState } from 'react';

const cache = new Map<string, unknown[]>();

const useSearchQuery = <T>(query: string, limit: number, offset: number) => {
	const setLoading = useUIStore.getState().setLoading;
	const setError = useUIStore.getState().setError;

	const [data, setData] = useState<T[] | null>(null);

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
				cache.set(cacheKey, results);
				setData(results);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, [limit, offset, query, setError, setLoading]);

	return { data };
};

export default useSearchQuery;
