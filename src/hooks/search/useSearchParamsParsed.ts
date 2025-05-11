'use client';

import { useSearchParams } from 'next/navigation';

const useSearchParamsParsed = () => {
	const params = useSearchParams();
	const searchTerm = params.get('searchTerm') ?? '';
	const limit = Number(params.get('limit') ?? 10);
	const offset = Number(params.get('offset') ?? 0);

	return { searchTerm, limit, offset, params };
};

export default useSearchParamsParsed;
