'use client';

import TestComicVineFetch from '@/components/test/test';
import styles from './page.module.css';

const Home = () => {
	return (
		<div className={styles.page}>
			<h1>Ka-splat!</h1>
			{TestComicVineFetch()}
			<div>Welcome</div>
		</div>
	);
};

export default Home;
