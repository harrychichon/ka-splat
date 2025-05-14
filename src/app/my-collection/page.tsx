'use client';
import { IssueGridList } from '@/components';
import { useCollectionStore } from '@/stores';
import styles from './page.module.scss';

const MyCollectionPage = () => {
	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const favouriteIssues = useCollectionStore((s) => s.favouriteIssues);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<header className={styles.header}>
					<p>OWNED</p>
					<p>AVG. PAGES</p>
					<p>AVG. RATING</p>
					<p>TOP PUBLISHER</p>
				</header>
				<section className={styles.crateWrapper}>
					<h2>Favourites</h2>
					<section className={styles.case}>
						<IssueGridList
							isGrid={false}
							isSearchContext={false}
							issues={favouriteIssues}
							title='Favourites'
						/>
					</section>
					<h2>Own</h2>
					<section className={styles.case}>
						<IssueGridList
							isGrid={false}
							isSearchContext={false}
							issues={ownedIssues}
							title='Own'
						/>
					</section>
				</section>
			</main>
		</div>
	);
};

export default MyCollectionPage;
