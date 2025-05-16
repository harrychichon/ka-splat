'use client';

import { CharacterSearch } from '@/components';
import styles from './page.module.scss';

const HomePage = () => {
	return (
		<div className={styles.page}>
			<h1>Hello</h1>
			<div>
				<CharacterSearch />
			</div>
		</div>
	);
};

export default HomePage;
