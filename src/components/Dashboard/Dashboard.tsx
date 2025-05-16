'use client';

import { StatCard } from '@/components';
import { useCharactersStore, useCollectionStore } from '@/stores';
import { calculateAverage } from '@/utils';
import { useEffect, useState } from 'react';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const [averagePages, setAveragePages] = useState(0);
	const [averageRating, setAverageRating] = useState(0);
	const favouriteCharacters = useCharactersStore((s) => s.favouriteCharacters);

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
				category='Owned'
				stat={ownedIssues.length}
			/>
			<StatCard
				category='Avg. pages'
				stat={averagePages}
			/>

			<StatCard
				category='Avg. rating'
				stat={averageRating}
			/>
			<StatCard
				category='<3 characters'
				stat={favouriteCharacters.length}
			/>
		</section>
	);
};

export default Dashboard;
