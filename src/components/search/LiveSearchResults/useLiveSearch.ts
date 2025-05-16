'use client';

import { searchQuery } from '@/services';
import { useEffect, useState } from 'react';
import { LiveSearchItem } from './LiveSearchResults';

const DEBOUNCE = 300;

const useLiveSearch = (
	initial: string,
	limit: number,
	type: 'issue' | 'character'
) => {
	const [input, setInput] = useState(initial);
	const [results, setResults] = useState<LiveSearchItem[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!input) return setResults([]);

			const searchParams = {
				resources: [type],
				limit,
			};

			searchQuery<LiveSearchItem>(input, searchParams)
				.then(({ results }) => {
					console.log('🔎 Live results:', results);
					setResults(results);
				})
				.catch((e) => console.error('Live search failed', e));
		}, DEBOUNCE);

		return () => clearTimeout(timeout);
	}, [input, limit, type]);

	return {
		input,
		setInput,
		results,
		clearResults: () => setResults([]),
		clearInput: () => setInput(''),
	};
};

export default useLiveSearch;
