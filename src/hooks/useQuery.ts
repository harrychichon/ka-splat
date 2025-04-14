import { fetchQuery } from '@/api/';
import { useEffect, useState } from 'react';

const useQuery = <T>(query: string, resourceTypeId?: number) => {
	const [data, setData] = useState<T[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!query) return;

		let isMounted = true;

		setLoading(true);
		fetchQuery<T>(query, resourceTypeId)
			.then((res) => isMounted && setData(res))
			.catch((err) => isMounted && setError(err.message))
			.finally(() => isMounted && setLoading(false));

		return () => {
			isMounted = false;
		};
	}, [query, resourceTypeId]);

	return { data, loading, error };
};

export default useQuery;
