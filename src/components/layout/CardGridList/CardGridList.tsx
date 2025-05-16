import styles from './CardGridList.module.scss';

type CardGridListProps<T> = {
	items: T[];
	isGrid: boolean;
	title?: string;
	renderItem: (item: T) => React.ReactNode;
	emptyMessage?: string;
	frostedPanel?: boolean;
};

const CardGridList = <T,>({
	items,
	isGrid,
	title,
	renderItem,
	emptyMessage = 'Nothing to display.',
	frostedPanel = false,
}: Readonly<CardGridListProps<T>>) => {
	if (items.length === 0) return <p>{emptyMessage}</p>;

	return (
		<div className={styles.container}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<section
				className={`${isGrid ? styles.grid : styles.list}${
					frostedPanel ? ' ' + styles.frost : ''
				}`}>
				{items.map(renderItem)}
			</section>
		</div>
	);
};

export default CardGridList;
