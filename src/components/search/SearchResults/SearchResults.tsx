import { InlineSpinner, IssueGrid } from '@/components/'; // or '@/components/issues'
import { useSearchParamsParsed, useSearchQuery } from '@/hooks';
import { useUIStore } from '@/stores';
import { Issue } from '@/types';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
	const { query, limit, offset } = useSearchParamsParsed();
	const { data: issues } = useSearchQuery<Issue>(query, limit, offset);

	const loading = useUIStore((s) => s.loading);
	const error = useUIStore((s) => s.error);

	if (loading) return <InlineSpinner />;
	if (error) return <p>{error}</p>;
	if (!query) return null;

	return (
		<div className={styles.searchResults}>
			{issues && issues.length === 0 && <p>No issues found for: {query}</p>}
			{issues && issues.length > 0 && <IssueGrid issues={issues} />}
		</div>
	);
};

export default SearchResults;
