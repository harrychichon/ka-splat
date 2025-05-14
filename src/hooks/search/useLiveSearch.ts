'use client';

import { searchQuery } from '@/services';
import { Issue } from '@/types';
import { useEffect, useState } from 'react';

const DEBOUNCE = 300;

const useLiveSearch = (initial: string, limit: number) => {
	const [input, setInput] = useState(initial);
	const [results, setResults] = useState<Issue[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!input) return setResults([]);

			searchQuery<Issue>(input, { resources: ['issue'], limit })
				.then(({ results }) => setResults(results))
				.catch((e) => console.error('Live search failed', e));
		}, DEBOUNCE);

		return () => clearTimeout(timeout);
	}, [input, limit]);

	return {
		input,
		setInput,
		results,
		clearResults: () => setResults([]),
		clearInput: () => setInput(''),
	};
};

export default useLiveSearch;
