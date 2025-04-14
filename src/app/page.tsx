'use client';

import { IssueCard } from '@/components';
import styles from './page.module.css';

const Home = () => {
	return (
		<div className={styles.page}>
			<h1>Ka-splat!</h1>
			<IssueCard />
			<div>Welcome</div>
		</div>
	);
};

export default Home;
