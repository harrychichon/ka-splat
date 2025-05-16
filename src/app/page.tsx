'use client';

import { CharacterSearch, LayoutGrid } from '@/components';
import styles from './page.module.scss';

const HomePage = () => {
	return (
		<div className={styles.page}>
			<LayoutGrid aside={<CharacterSearch />} />
		</div>
	);
};

export default HomePage;
