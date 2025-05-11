import { IssueCard } from '@/components/';
import { Issue } from '@/types';
import styles from './IssueGrid.module.scss';

type IssueGridProps = {
	issues: Issue[];
	title?: string;
};

export const IssueGrid = ({ issues, title }: Readonly<IssueGridProps>) => {
	if (issues.length === 0) return <p>No issues to display.</p>;

	return (
		<section className={styles.wrapper}>
			<h2 className={title}>{title}</h2>
			<div className={styles.grid}>
				{issues.map((issue) => (
					<IssueCard
						key={issue.id}
						issue={issue}
						context={'search'}
					/>
				))}
			</div>
		</section>
	);
};
