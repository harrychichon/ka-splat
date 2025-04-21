import fetchQuery from '@/api/fetchQuery'; // your function
import { useIssueStore } from '@/stores/issueStore';
import filterIssues from '@/utils/filterIssues';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
	const searchParams = useSearchParams();
	const q = searchParams.get('q') ?? '';
	const setActiveIssues = useIssueStore((state) => state.setActiveIssues);

	useEffect(() => {
		if (!q) return;

		let cancelled = false;

		const runSearch = async () => {
			try {
				const rawResults = await fetchQuery<any>(q);
				if (cancelled) return;

				const filtered = filterIssues(q, rawResults);
				setActiveIssues(filtered);
			} catch (err) {
				console.error('Search failed:', err);
			}
		};

		runSearch();
		return () => {
			cancelled = true;
		};
	}, [q, setActiveIssues]);

	return <section className={styles.SearchResults}></section>;
};

export default SearchResults;

//frames
//mobile kit
//desktop resolutions
