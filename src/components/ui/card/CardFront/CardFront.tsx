import styles from './CardFront.module.scss';

type CardFrontProps = {
	header?: React.ReactNode;
	image?: React.ReactNode;
	actions?: React.ReactNode;
	children?: React.ReactNode;
};

const CardFront = ({
	header,
	image,
	actions,
	children,
}: Readonly<CardFrontProps>) => {
	return (
		<article className={styles.cardFront}>
			{header && <div className={styles.header}>{header}</div>}
			{image && <div className={styles.imageWrapper}>{image}</div>}
			{children}
			{actions && <div className={styles.buttonContainer}>{actions}</div>}
		</article>
	);
};

export default CardFront;
