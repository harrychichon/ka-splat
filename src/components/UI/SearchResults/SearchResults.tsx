import useSearchParamsParsed from '@/hooks/useSearchParamsParsed';
import useSearchQuery from '@/hooks/useSearchQuery';
import { Issue } from '@/types';
import IssueCard from '../Cards/IssueCard/IssueCard';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
	const { query, limit, offset } = useSearchParamsParsed();

	const {
		data: issues,
		loading,
		error,
	} = useSearchQuery<Issue>(query, limit, offset);

	if (!query) return null;

	return (
		<div className={styles.SearchResults}>
			{loading && <p>Loading issues...</p>}
			{error && <p>Something went wrong: {error.message}</p>}
			{issues && issues.length === 0 && <p>No issues found for: {query}</p>}
			{issues && issues.length > 0 && (
				<div className={styles.ResultGrid}>
					{issues.map((issue) => (
						<IssueCard
							key={issue.id}
							issue={issue}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchResults;
