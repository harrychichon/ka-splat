'use client';

import fetchQuery from '@/api/fetchQuery'; // adjust path if needed
import { useEffect, useState } from 'react';

type Result = {
	name: string;
	site_detail_url: string;
};

const TestComicVineFetch = () => {
	const [results, setResults] = useState<Result[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchQuery<Result>('wolverine', 4005)
			.then(setResults)
			.catch((err) => setError(err.message));
	}, []);

	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h2>Results</h2>
			<ul>
				{results.map((r) => (
					<li key={r.site_detail_url}>
						<a
							href={r.site_detail_url}
							target='_blank'
							rel='noreferrer'>
							{r.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TestComicVineFetch;
