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
	title,
}: Readonly<IssueGridProps>) => {
	if (issues.length === 0) return <p>No issues to display.</p>;

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<section className={isGrid ? styles.grid : styles.list}>
				{issues.map((issue) => (
					<IssueCard
						key={issue.id}
						issue={issue}
						context={isSearchContext ? 'search' : 'collection'}
					/>
				))}
			</section>
		</div>
	);
};
