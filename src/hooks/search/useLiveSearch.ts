'use client';

import { searchQuery } from '@/services';
import { Issue } from '@/types';
import { useEffect, useState } from 'react';

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
				.catch(console.error);
		}, 300);

		return () => clearTimeout(timeout);
	}, [input, limit]);

	const clearResults = () => setResults([]);

	return { input, setInput, results, clearResults };
};

export default useLiveSearch;
