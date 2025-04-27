'use client';

import { SearchBar, SearchResults } from '@/components';
import styles from './page.module.scss';

const HomePage = () => {
	return (
		<main className={styles.page}>
			<h1>Ka-splat!</h1>
			<SearchBar />
			<SearchResults />
		</main>
	);
};

export default HomePage;
