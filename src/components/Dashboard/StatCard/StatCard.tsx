import styles from './StatCard.module.scss';

type StatCardProps = {
	header: string;
	stat: number;
};

const StatCard = ({ header, stat }: Readonly<StatCardProps>) => {
	return (
		<article className={styles.card}>
			<h2>{header}</h2>
			<p>{stat}</p>
		</article>
	);
};

export default StatCard;
