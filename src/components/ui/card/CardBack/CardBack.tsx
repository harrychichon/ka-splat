import styles from './CardBack.module.scss';

type CardBackProps = {
	content: React.ReactNode;
	actions: React.ReactNode;
};

const CardBack = ({ content, actions }: Readonly<CardBackProps>) => {
	return (
		<article className={styles.cardBack}>
			{content && <div className={styles.descWrapper}>{content}</div>}
			{actions && <div className={styles.buttonContainer}>{actions}</div>}
		</article>
	);
};

export default CardBack;
