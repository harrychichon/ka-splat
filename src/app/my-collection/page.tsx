'use client';
import { IssueCard } from '@/components';
import { useCollectionStore } from '@/stores';
import styles from './page.module.scss';

const MyCollectionPage = () => {
	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const favouriteIssues = useCollectionStore((s) => s.favouriteIssues);

	return (
		<div className={styles.page}>
			<aside className={styles.aside}>
				<section className={styles.createCrateSection}>
					<button type='button'>Create crate</button>
				</section>
			</aside>
			<main className={styles.main}>
				<header className={styles.header}>
					<p>OWNED</p>
					<p>AVG. PAGES</p>
					<p>AVG. RATING</p>
					<p>TOP PUBLISHER</p>
				</header>
				<section className={styles.crateWrapper}>
					<section>
						<h2>FAVE</h2>
						{favouriteIssues.map((issue) => (
							<IssueCard
								key={issue.id}
								issue={issue}
								context='collection'
							/>
						))}
					</section>
					<section>
						<h2>OWN</h2>
						{ownedIssues.map((issue) => (
							<IssueCard
								key={issue.id}
								issue={issue}
							/>
						))}
					</section>
				</section>
			</main>
		</div>
	);
};

export default MyCollectionPage;
