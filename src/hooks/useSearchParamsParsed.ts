import { useSearchParams } from 'next/navigation';

const useSearchParamsParsed = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get('query') ?? '';
	const limit = Number(searchParams.get('limit') ?? 10);
	const offset = Number(searchParams.get('offset') ?? 0);

	return { query, limit, offset, searchParams };
};

export default useSearchParamsParsed;
