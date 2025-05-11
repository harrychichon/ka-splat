'use client';

import { Modal } from '@/components/ui';
import { useCollectionStore, useUIStore } from '@/stores';
import { useEffect, useState } from 'react';
import styles from './IssueReviewModal.module.scss';

const IssueReviewModal = () => {
	const { openModal, setOpenModal, activeIssue, setActiveIssue } = useUIStore();

	const { setReviewForIssue } = useCollectionStore();

	const [reviewText, setReviewText] = useState('');
	const [rating, setRating] = useState<number | null>(null);
	const [numberOfPages, setNumberOfPages] = useState<number | null>(null);

	const resetForm = () => {
		setReviewText('');
		setRating(null);
		setNumberOfPages(null);
	};

	useEffect(() => {
		if (openModal && activeIssue?.review) {
			setReviewText(activeIssue.review.text || '');
			setRating(activeIssue.review.rating ?? null);
			setNumberOfPages(activeIssue.review.numberOfPages ?? null);
		} else if (!openModal) {
			resetForm();
		}
	}, [openModal, activeIssue]);

	const handleClose = () => {
		resetForm();
		setOpenModal(false);
		setActiveIssue(null);
	};

	const handleSave = () => {
		if (!activeIssue) return;

		if (reviewText && rating !== null && numberOfPages !== null) {
			setReviewForIssue(activeIssue.id, {
				text: reviewText,
				rating,
				numberOfPages,
			});
			handleClose();
		}
	};

	if (!activeIssue) return null;

	return (
		<Modal
			isOpen={openModal}
			onClose={handleClose}>
			<div className={styles.modalContent}>
				<h2 className={styles.modalTitle}>{activeIssue.name}</h2>

				<form
					className={styles.form}
					action=''>
					<label htmlFor='number-of-pages'>No. of pages</label>
					<input
						id='number-of-pages'
						type='number'
						value={numberOfPages ?? ''}
						onChange={(e) => setNumberOfPages(Number(e.target.value) || null)}
					/>

					<fieldset>
						{[1, 2, 3, 4, 5].map((num) => (
							<label key={num}>
								<input
									type='radio'
									value={num}
									checked={rating === num}
									onChange={() => setRating(num)}
								/>
								{num}
							</label>
						))}
					</fieldset>

					<label htmlFor='review'>Review</label>
					<input
						id='review'
						type='text'
						placeholder='Write a review...'
						value={reviewText}
						onChange={(e) => setReviewText(e.target.value)}
					/>

					<button
						type='button'
						onClick={handleSave}>
						Save review
					</button>
				</form>
			</div>
		</Modal>
	);
};

export default IssueReviewModal;
