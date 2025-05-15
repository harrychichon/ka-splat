import styles from './CardFront.module.scss';

type CardFrontProps = {
	header?: React.ReactNode;
	actions?: React.ReactNode;
	children?: React.ReactNode;
	image?: string;
};

const CardFront = ({
	header,
	actions,
	children,
	image,
}: Readonly<CardFrontProps>) => {
	return (
		<article
			className={styles.cardFront}
			style={image ? { backgroundImage: `url(${image})` } : undefined}>
			{header && <div className={styles.header}>{header}</div>}
			{children}
			{actions && <div className={styles.actionsContainer}>{actions}</div>}
		</article>
	);
};

export default CardFront;
