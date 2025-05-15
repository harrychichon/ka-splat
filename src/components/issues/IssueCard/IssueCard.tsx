'use client';

import { CardBack, CardFront, IconButton } from '@/components';
import { useCardFlip } from '@/hooks';
import { useCollectionStore, useUIStore } from '@/stores';
import { Issue } from '@/types';
import { getIssueDisplayValues } from '@/utils';
import styles from './IssueCard.module.scss';
import AboutIssue from './aboutIssue/AboutIssue';

type IssueCardProps = {
	issue: Issue;
	context: 'search' | 'collection';
	className?: string;
};

const IssueCard = ({ issue, context, className }: Readonly<IssueCardProps>) => {
	const isOwned = useCollectionStore((s) => s.isOwned(issue.id));
	const isFavourite = useCollectionStore((s) => s.isFavourite(issue.id));
	const toggleOwned = useCollectionStore((s) => s.toggleOwnedIssue);
	const toggleFavourite = useCollectionStore((s) => s.toggleFavouriteIssue);
	const { flipped, toggleFlip } = useCardFlip();
	const { title, subTitle, imageSrc, coverDate, storyArc, personCredits } =
		getIssueDisplayValues(issue);

	const handleOpenReviewModal = () => {
		console.log('Opening modal for:', issue.name);
		useUIStore.getState().setActiveIssue(issue);
		useUIStore.getState().setOpenModal(true);
	};
	return (
		<article
			className={`${styles.issueCard} ${
				flipped ? styles.flipped : ''
			}  ${className}`}>
			<div
				className={styles.inner}
				role='group'>
				<CardFront
					image={imageSrc}
					header={
						<>
							<h2>{title}</h2>
							<h3>{subTitle}</h3>
						</>
					}
					actions={
						<>
							<IconButton
								type='Own'
								className={'left' + 'own'}
								active={isOwned}
								onClick={() => toggleOwned(issue)}
								width={48}
								height={48}
							/>
							<IconButton
								type='Fave'
								className={'center' + 'fave'}
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
						context === 'search' ? (
							<AboutIssue
								coverDate={coverDate}
								volume={title}
								storyArc={storyArc}
								personCredits={personCredits}
							/>
						) : issue.review ? (
							`(${issue.review.rating}/5) ${issue.review.text}`
						) : (
							'No review yet.'
						)
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
