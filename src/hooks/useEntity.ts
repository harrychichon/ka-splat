import type { DetailResourceName } from '@/api/';
import { fetchEntity } from '@/api/';
import { useEffect, useState } from 'react';

const useEntity = <T>(resource: DetailResourceName, id: number) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		setLoading(true);
		fetchEntity<T>(resource, id)
			.then((res) => isMounted && setData(res))
			.catch((err) => isMounted && setError(err.message))
			.finally(() => isMounted && setLoading(false));

		return () => {
			isMounted = false;
		};
	}, [resource, id]);

	return { data, loading, error };
};

export default useEntity;
