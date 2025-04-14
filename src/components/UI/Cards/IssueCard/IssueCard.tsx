import styles from './IssueCard.module.scss';
const IssueCard = () => {
	return (
		<article className={styles.IssueCard}>
			<div className={styles.inner}>
				<div className={styles.front}>This is the front</div>
			</div>
			<div className={styles.back}>This is the back</div>
		</article>
	);
};

export default IssueCard;
