'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './IssueCard.module.scss';

type IssueCardProps = {
	title: string;
	subTitle: string;
	imageSrc: string;
	imageAlt: string;
	description: string;
};

const IssueCard = ({
	title,
	subTitle,
	imageSrc,
	imageAlt,
	description,
}: Readonly<IssueCardProps>) => {
	const [flipped, setFlipped] = useState(false);

	const handleFlip = () => setFlipped((prev) => !prev);

	return (
		<article className={`${styles.IssueCard} ${flipped ? styles.flipped : ''}`}>
			<div className={styles.inner}>
				<div className={styles.front}>
					<h2>{title}</h2>
					<h3>{subTitle}</h3>
					<Image
						src={imageSrc}
						fill={true}
						alt={imageAlt}
					/>
					<div className={styles.buttonContainer}>
						<button type='button'>OWN</button>
						<button type='button'>FAVE</button>
						<button
							type='button'
							onClick={handleFlip}>
							FLIP
						</button>
					</div>
				</div>
				<div className={styles.back}>
					<p>{description}</p>
					<div className={styles.buttonContainer}>
						<button type='button'>READ MORE...</button>
						<button
							type='button'
							onClick={handleFlip}>
							FLIP
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};

export default IssueCard;
