'use client';

import { searchQuery } from '@/services';
import { useUIStore } from '@/stores';
import { SearchQueryResult } from '@/types';
import { useEffect, useState } from 'react';

const cache = new Map<string, SearchQueryResult<unknown>>();

const useSearchQuery = <T>(
	searchTerm: string,
	limit: number,
	offset: number
) => {
	const setLoading = useUIStore.getState().setLoading;
	const setError = useUIStore.getState().setError;
	const [data, setData] = useState<SearchQueryResult<T> | null>(null);

	useEffect(() => {
		if (!searchTerm) {
			setData(null);
			return;
		}

		const cacheKey = `${searchTerm}|limit=${limit}|offset=${offset}`;
		const cached = cache.get(cacheKey);
		if (cached) {
			setData(cached as SearchQueryResult<T>);
			return;
		}

		setLoading(true);
		searchQuery<T>(searchTerm, { resources: ['issue'], limit, offset })
			.then((result) => {
				cache.set(cacheKey, result);
				setData(result);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, [searchTerm, limit, offset, setLoading, setError]);

	return { data };
};

export default useSearchQuery;
