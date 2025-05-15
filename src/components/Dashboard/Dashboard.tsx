'use client';

import { StatCard } from '@/components';
import { useCollectionStore } from '@/stores';
import { calculateAverage } from '@/utils';
import { useEffect, useState } from 'react';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const [averagePages, setAveragePages] = useState(0);
	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		const avg = calculateAverage(ownedIssues, (i) => i.review?.numberOfPages);
		setAveragePages(avg);
	}, [ownedIssues]);

	useEffect(() => {
		const avg = calculateAverage(ownedIssues, (i) => i.review?.rating);
		setAverageRating(avg);
	}, [ownedIssues]);

	return (
		<section className={styles.dashboard}>
			<StatCard
				header='Owned'
				stat={ownedIssues.length}
			/>
			<StatCard
				header='Avg. pages'
				stat={averagePages}
			/>

			<StatCard
				header='Avg. rating'
				stat={averageRating}
			/>
			<p>TOP PUBLISHER</p>
		</section>
	);
};

export default Dashboard;
