'use client';

import { searchEntity } from '@/services';
import { useEffect, useState } from 'react';

const cache = new Map<string, unknown>();

type SearchEntityArgs =
	| { resourceType: string; id: number }
	| { apiDetailUrl: string };

const createCacheKey = (args: SearchEntityArgs) => {
	return 'apiDetailUrl' in args
		? args.apiDetailUrl
		: `${args.resourceType}/${args.id}`;
};

const useSearchEntity = <T>(args: SearchEntityArgs) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const key = createCacheKey(args);
		const cached = cache.get(key);

		if (cached) {
			setData(cached as T);
			setLoading(false);
			return;
		}

		setLoading(true);
		searchEntity<T>(args)
			.then((fetchedData) => {
				cache.set(key, fetchedData);
				setData(fetchedData);
			})
			.catch(setError)
			.finally(() => setLoading(false));
	}, [JSON.stringify(args)]); // stable enough since it's a simple object

	return { data, loading, error };
};

export default useSearchEntity;
