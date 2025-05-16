import { Character, Issue } from '@/types';
import { isCharacter, isIssue } from '@/utils/guards'; // or wherever you placed them
import Image from 'next/image';
import styles from './LiveSearchResults.module.scss';

export type LiveSearchItem = Issue | Character;

type LiveSearchResultsProps = {
	items: LiveSearchItem[];
	onSelect?: (item: Character) => void;
};

const LiveSearchResults = ({
	items,
	onSelect,
}: Readonly<LiveSearchResultsProps>) => {
	if (!items.length) return null;

	return (
		<ul
			className={styles.dropdown}
			role='listbox'>
			{items.map((item) => (
				<li
					key={item.id}
					onMouseDown={() => {
						console.log('✅ MouseDown fired for', item.name);
						if (isCharacter(item)) onSelect?.(item);
					}}>
					{item.image?.thumb_url && (
						<Image
							src={item.image.thumb_url}
							alt={item.name ?? 'Live result item'}
							width={50}
							height={75}
						/>
					)}
					{isIssue(item) ? (
						<>
							<span>{item.volume?.name}</span>
							<span>{item.name}</span>
							<span>#{item.issue_number}</span>
						</>
					) : (
						<>
							<span>{item.name}</span>
							<span>{item.deck}</span>
						</>
					)}
				</li>
			))}
		</ul>
	);
};

export default LiveSearchResults;
