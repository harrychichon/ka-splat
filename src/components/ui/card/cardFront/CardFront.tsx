import styles from './CardFront.module.scss';

type CardFrontProps = {
	header?: React.ReactNode;
	actions?: React.ReactNode;
	children?: React.ReactNode;
	image?: string;
	size?: 'default' | 'compact';
};

const CardFront = ({
	header,
	actions,
	children,
	image,
	size,
}: Readonly<CardFrontProps>) => {
	return (
		<article
			className={`${styles.cardFront} ${
				size === 'compact' ? styles.compact : ''
			}`}
			style={image ? { backgroundImage: `url(${image})` } : undefined}>
			{header && <div className={styles.header}>{header}</div>}
			{children}
			{actions && <div className={styles.actionsContainer}>{actions}</div>}
		</article>
	);
};

export default CardFront;
