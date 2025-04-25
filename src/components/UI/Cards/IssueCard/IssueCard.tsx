'use client';

import { useCollectionStore } from '@/stores/collectionStore';
import { Issue } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './IssueCard.module.scss';

type IssueCardProps = {
	issue: Issue;
};

const IssueCard = ({ issue }: Readonly<IssueCardProps>) => {
	const [flipped, setFlipped] = useState(false);
	const handleFlip = () => setFlipped((prev) => !prev);

	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const favouriteIssues = useCollectionStore((s) => s.favouriteIssues);

	const isOwned = ownedIssues.some((i) => i.id === issue.id);
	const isFavourite = favouriteIssues.some((i) => i.id === issue.id);

	const toggleOwned = useCollectionStore((s) => s.toggleOwnedIssue);
	const toggleFavourite = useCollectionStore((s) => s.toggleFavouriteIssue);

	const title = issue.volume?.name ?? 'Unknown volume';
	const subTitle = `#${issue.issue_number} ${issue.name ?? ''}`;
	const imageSrc = issue.image?.medium_url || '/fallback.jpg'; //TODO Add fallback img
	const imageAlt = issue.name ?? 'Issue image';
	const description =
		issue.description?.replace(/<[^>]+>/g, '') ?? 'No description available';

	return (
		<article className={`${styles.IssueCard} ${flipped ? styles.flipped : ''}`}>
			<div className={styles.inner}>
				<div className={styles.front}>
					<h2>{title}</h2>
					<h3>{subTitle}</h3>
					<img
						src={imageSrc}
						alt={imageAlt}
					/>
					<div className={styles.buttonContainer}>
						<button
							onClick={() => toggleOwned(issue)}
							title={isOwned ? 'Owned' : 'Add to Owned'}>
							<Image
								src={
									isOwned
										? '/icons/READ checked.png'
										: '/icons/READ unchecked.png'
								}
								alt={isOwned ? 'Owned' : 'Add to Owned'}
								width={48}
								height={48}
							/>
						</button>

						<button
							onClick={() => toggleFavourite(issue)}
							title={isFavourite ? 'Favourited' : 'Favourite'}>
							<Image
								src={
									isFavourite
										? '/icons/FAVE checked.png'
										: '/icons/FAVE unchecked.png'
								}
								alt={isFavourite ? 'Favourited' : 'Favourite'}
								width={48}
								height={48}
							/>
						</button>
						<button
							type='button'
							onClick={handleFlip}>
							<Image
								src={'/icons/FLIP.png'}
								alt={'Flip'}
								width={48}
								height={48}
							/>
						</button>
					</div>
				</div>
				<div className={styles.back}>
					<div className={styles.descWrapper}>{description}</div>
					<div className={styles.buttonContainer}>
						<button type='button'>
							<Link href={`/issue/${issue.id}`}>READ MORE...</Link>
						</button>
						<button
							type='button'
							onClick={handleFlip}>
							<Image
								src={'/icons/FLIP.png'}
								alt={'Flip'}
								width={48}
								height={48}
							/>
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default IssueCard;
