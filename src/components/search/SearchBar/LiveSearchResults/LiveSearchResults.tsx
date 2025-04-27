import { Issue } from '@/types';
import Image from 'next/image';
import styles from './LiveSearchResults.module.scss';

type LiveSearchResultsProps = {
	issues: Issue[];
	onSelect: (issue: Issue) => void;
};

const LiveSearchResults = ({
	issues,
	onSelect,
}: Readonly<LiveSearchResultsProps>) => {
	if (!issues.length) return null;

	return (
		<ul
			className={styles.dropdown}
			role='listbox'>
			{issues.map((issue) => (
				<li
					key={issue.id}
					onClick={() => onSelect(issue)}>
					{issue.image?.thumb_url && (
						<Image
							src={issue.image.thumb_url}
							alt={issue.name ?? 'Issue'}
							width={50}
							height={75}
						/>
					)}
					<span>{issue.volume?.name}</span>
					<span>{issue.name}</span>
					<span>#{issue.issue_number}</span>
				</li>
			))}
		</ul>
	);
};

export default LiveSearchResults;
