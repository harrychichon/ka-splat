const searchQuery = async <T>(
	query: string,
	options?: { resources?: string[]; limit?: number; offset?: number }
): Promise<T[]> => {
	const searchParams = new URLSearchParams({
		query,
		format: 'json',
		api_key: process.env.NEXT_PUBLIC_COMICVINE_API_KEY!,
	});

	if (options?.resources) {
		searchParams.append('resources', options.resources.join(','));
	}
	if (options?.limit) {
		searchParams.append('limit', options.limit.toString());
	}
	if (options?.offset) {
		searchParams.append('offset', options.offset.toString());
	}

	const res = await fetch(`/api/comicvine/search?${searchParams}`);
	const json = await res.json();
	return json.results ?? [];
};

export default searchQuery;
