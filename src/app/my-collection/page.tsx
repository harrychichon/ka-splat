'use client';
import { Dashboard, IssueGridList } from '@/components';
import { useCharactersStore, useCollectionStore } from '@/stores';
import styles from './page.module.scss';

const MyCollectionPage = () => {
	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const favouriteIssues = useCollectionStore((s) => s.favouriteIssues);
	const favouriteCharacters = useCharactersStore((s) => s.favouriteCharacters);

	return (
		<div className={styles.page}>
			<Dashboard />
			<IssueGridList
				isGrid={false}
				isSearchContext={false}
				issues={favouriteIssues}
				title='Favourites'
			/>

			<IssueGridList
				isGrid={false}
				isSearchContext={false}
				issues={ownedIssues}
				title='Own'
			/>
			<div>
				<h2>Favourite characters</h2>

				<ul>
					{favouriteCharacters.map((c) => (
						<li key={c.id}>{c.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MyCollectionPage;
