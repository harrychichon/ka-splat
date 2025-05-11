import { InlineSpinner, IssueGrid } from '@/components/'; // or '@/components/issues'
import Pagination from '@/components/ui/Pagination/Pagination';
import { useSearchParamsParsed, useSearchQuery } from '@/hooks';
import { useUIStore } from '@/stores';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
	const loading = useUIStore((s) => s.loading);
	const error = useUIStore((s) => s.error);
	const { searchTerm, limit, offset } = useSearchParamsParsed();
	const { data: issues } = useSearchQuery(searchTerm, limit, offset);

	if (loading) return <InlineSpinner />;
	if (error) return <p>{error}</p>;
	if (!searchTerm || !issues) return null;
	const { results, total } = issues;

	const totalPages = Math.ceil(total / limit);
	const currentPage = Math.floor(offset / limit) + 1;

	const buildHref = (page: number) =>
		`?searchTerm=${searchTerm}&limit=${limit}&offset=${(page - 1) * limit}`;

	console.log(offset);

	return (
		<div className={styles.searchResults}>
			{issues && results.length === 0 && (
				<p>No issues found for: {searchTerm}</p>
			)}
			{issues && issues.results.length > 0 && <IssueGrid issues={results} />}
			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					buildHref={buildHref}
				/>
			)}
		</div>
	);
};

export default SearchResults;
