'use client';

import SearchBar from '@/components/UI/SearchBar/SearchBar';
import SearchResults from '@/components/UI/SearchResults/SearchResults';
import styles from './page.module.css';

const Home = () => {
	return (
		<div className={styles.page}>
			<h1>Ka-splat!</h1>
			<SearchBar />
			<SearchResults />
		</div>
	);
};

export default Home;
