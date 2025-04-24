'use client';

import SearchBar from '@/components/UI/SearchBar/SearchBar';
import styles from './page.module.css';

const Home = () => {
	return (
		<div className={styles.page}>
			<h1>Ka-splat!</h1>
			<SearchBar />
		</div>
	);
};

export default Home;
