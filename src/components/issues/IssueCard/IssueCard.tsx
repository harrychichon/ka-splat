'use client';

import { IconButton } from '@/components';
import { useCardFlip } from '@/hooks';
import { useCollectionStore } from '@/stores';
import { Issue } from '@/types';
import { getIssueDisplayValues } from '@/utils';
import Link from 'next/link';
import styles from './IssueCard.module.scss';

type IssueCardProps = {
	issue: Issue;
};

const IssueCard = ({ issue }: Readonly<IssueCardProps>) => {
	const isOwned = useCollectionStore((s) => s.isOwned(issue.id));
	const isFavourite = useCollectionStore((s) => s.isFavourite(issue.id));
	const toggleOwned = useCollectionStore((s) => s.toggleOwnedIssue);
	const toggleFavourite = useCollectionStore((s) => s.toggleFavouriteIssue);

	const { flipped, toggleFlip } = useCardFlip();

	const { title, subTitle, imageSrc, imageAlt, description } =
		getIssueDisplayValues(issue);

	return (
		<article className={`${styles.issueCard} ${flipped ? styles.flipped : ''}`}>
			<div
				className={styles.inner}
				role='group'>
				<div className={styles.front}>
					<h2>{title}</h2>
					<h3>{subTitle}</h3>
					<img
						src={imageSrc}
						alt={imageAlt}
					/>
					<div className={styles.buttonContainer}>
						<IconButton
							type='Own'
							active={isOwned}
							onClick={() => toggleOwned(issue)}
							width={48}
							height={48}
						/>
						<IconButton
							type='Fave'
							active={isFavourite}
							onClick={() => toggleFavourite(issue)}
							width={48}
							height={48}
						/>
						<IconButton
							type='Flip'
							onClick={toggleFlip}
							width={48}
							height={48}
						/>
					</div>
				</div>
				<div className={styles.back}>
					<div className={styles.descWrapper}>{description}</div>
					<div className={styles.buttonContainer}>
						<Link
							href={`/issue/${issue.id}`}
							className={styles.readMoreButton}>
							READ MORE...
						</Link>
						<IconButton
							type='Flip'
							onClick={toggleFlip}
							width={48}
							height={48}
						/>
					</div>
				</div>
			</div>
		</article>
	);
};

export default IssueCard;
