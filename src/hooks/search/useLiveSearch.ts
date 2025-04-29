'use client';

import { searchQuery } from '@/services';
import { Issue } from '@/types';
import { useEffect, useState } from 'react';

const DEBOUNCE_DELAY = 300;

const useLiveSearch = (initialQuery: string, limit: number) => {
	const [input, setInput] = useState(initialQuery);
	const [results, setResults] = useState<Issue[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!input) {
				setResults([]);
				return;
			}
			searchQuery<Issue>(input, {
				resources: ['issue'],
				limit,
			})
				.then(setResults)
				.catch((err) => console.error('Live search failed:', err));
		}, DEBOUNCE_DELAY);

		return () => clearTimeout(timeout);
	}, [input, limit]);

	const clearResults = () => setResults([]);

	return { input, setInput, results, clearResults };
};

export default useLiveSearch;
