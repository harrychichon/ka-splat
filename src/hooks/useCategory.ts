import { fetchCategory } from '@/api';
import type { ListResourceName } from '@/api/';
import { useEffect, useState } from 'react';

const useCategory = <T>(resource: ListResourceName, limit = 20, offset = 0) => {
	const [data, setData] = useState<T[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		setLoading(true);
		fetchCategory<T>(resource, limit, offset)
			.then((res) => isMounted && setData(res))
			.catch((err) => isMounted && setError(err.message))
			.finally(() => isMounted && setLoading(false));

		return () => {
			isMounted = false;
		};
	}, [resource, limit, offset]);

	return { data, loading, error };
};

export default useCategory;
