import styles from './StatCard.module.scss';
type StatCardProps = {
	category: string;
	stat: number;
};

const StatCard = ({ category, stat }: Readonly<StatCardProps>) => {
	return (
		<article className={styles.card}>
			<p className={styles.stat}>{stat}</p>
			<div className={styles.category}>
				<p>{category}</p>
			</div>
		</article>
	);
};

export default StatCard;
