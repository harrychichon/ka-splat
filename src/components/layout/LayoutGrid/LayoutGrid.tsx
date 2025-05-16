import { Aside, Main } from '@/components';
import styles from './LayoutGrid.module.scss';

type LayoutGridProps = {
	main?: React.ReactNode;
	aside?: React.ReactNode;
};

const LayoutGrid = ({ main, aside }: LayoutGridProps) => {
	return (
		<div className={styles.grid}>
			<Main>{main}</Main>
			{aside && <Aside>{aside}</Aside>}
		</div>
	);
};

export default LayoutGrid;
