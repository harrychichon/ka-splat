import { CardGridList, IssueCard } from '@/components';
import { Issue } from '@/types';

type IssueGridProps = {
	issues: Issue[];
	isGrid: boolean;
	isSearchContext: boolean;
	title?: string;
};

const IssueGridList = ({
	issues,
	isGrid,
	isSearchContext,
	title,
}: Readonly<IssueGridProps>) => {
	return (
		<CardGridList
			frostedPanel={true}
			items={issues}
			isGrid={isGrid}
			title={title}
			renderItem={(issue) => (
				<IssueCard
					key={issue.id}
					issue={issue}
					context={isSearchContext ? 'search' : 'collection'}
				/>
			)}
			emptyMessage='No issues to display.'
		/>
	);
};

export default IssueGridList;
