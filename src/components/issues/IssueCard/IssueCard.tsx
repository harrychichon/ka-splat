'use client';

import { CardBack, CardFront, IconButton } from '@/components';
import { useCardFlip } from '@/hooks';
import { useCollectionStore, useUIStore } from '@/stores';
import { Issue } from '@/types';
import { getIssueDisplayValues } from '@/utils';
import styles from './IssueCard.module.scss';

type IssueCardProps = {
	issue: Issue;
	context: 'search' | 'collection';
};

const IssueCard = ({ issue, context }: Readonly<IssueCardProps>) => {
	const isOwned = useCollectionStore((s) => s.isOwned(issue.id));
	const isFavourite = useCollectionStore((s) => s.isFavourite(issue.id));
	const toggleOwned = useCollectionStore((s) => s.toggleOwnedIssue);
	const toggleFavourite = useCollectionStore((s) => s.toggleFavouriteIssue);
	const { flipped, toggleFlip } = useCardFlip();
	const { title, subTitle, imageSrc, imageAlt, review } =
		getIssueDisplayValues(issue);

	const handleOpenReviewModal = () => {
		console.log('Opening modal for:', issue.name);
		useUIStore.getState().setActiveIssue(issue);
		useUIStore.getState().setOpenModal(true);
	};

	return (
		<article className={`${styles.issueCard} ${flipped ? styles.flipped : ''}`}>
			<div
				className={styles.inner}
				role='group'>
				<CardFront
					header={
						<>
							<h2>{title}</h2>
							<h3>{subTitle}</h3>
						</>
					}
					image={
						<img
							src={imageSrc}
							alt={imageAlt}
						/>
					}
					actions={
						<>
							<IconButton
								type='Own'
								className='left'
								active={isOwned}
								onClick={() => toggleOwned(issue)}
								width={48}
								height={48}
							/>
							<IconButton
								className='center'
								type='Fave'
								active={isFavourite}
								onClick={() => toggleFavourite(issue)}
								width={48}
								height={48}
							/>
							<IconButton
								className='right'
								type='Flip'
								onClick={toggleFlip}
								width={48}
								height={48}
							/>
						</>
					}
				/>
				<CardBack
					content={
						context === 'search'
							? issue.description
							: issue.review
							? `(${issue.review.rating}/5) ${issue.review.text}`
							: 'No review yet.'
					}
					actions={
						<>
							{context === 'collection' && (
								<button
									type='button'
									onClick={handleOpenReviewModal}
									className={styles.reviewButton + ' left' + ' center'}>
									Review
								</button>
							)}
							<IconButton
								className='right'
								type='Flip'
								onClick={toggleFlip}
								width={48}
								height={48}
							/>
						</>
					}
				/>
			</div>
		</article>
	);
};

export default IssueCard;
