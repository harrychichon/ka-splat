import styles from './StatCard.module.scss';

type StatCardProps = {
	header: string;
	stat: number;
};

const StatCard = ({ header, stat }: Readonly<StatCardProps>) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.header}>{header}</h2>
			<p className={styles.stat}>{stat}</p>
		</article>
	);
};

export default StatCard;
