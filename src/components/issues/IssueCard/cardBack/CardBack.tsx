import styles from './CardBack.module.scss';

type CardBackProps = {
	content: React.ReactNode;
	actions: React.ReactNode;
};

const CardBack = ({ content, actions }: Readonly<CardBackProps>) => {
	return (
		<article className={styles.cardBack}>
			<div className={styles.contentContainer}>{content}</div>
			<div className={styles.actionsContainer}>{actions}</div>
		</article>
	);
};

export default CardBack;
