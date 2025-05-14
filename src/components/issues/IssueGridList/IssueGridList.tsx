import { IssueCard } from '@/components/';
import { Issue } from '@/types';
import styles from './IssueGridList.module.scss';

type IssueGridProps = {
	issues: Issue[];
	isGrid: boolean;
	isSearchContext: boolean;
	title?: string;
};

export const IssueGridList = ({
	issues,
	isGrid,
	isSearchContext,
}: Readonly<IssueGridProps>) => {
	if (issues.length === 0) return <p>No issues to display.</p>;

	return (
		<section className={isGrid ? styles.grid : styles.list}>
			{issues.map((issue) => (
				<IssueCard
					key={issue.id}
					issue={issue}
					context={isSearchContext ? 'search' : 'collection'}
				/>
			))}
		</section>
	);
};
