'use client';
import { Dashboard, IssueGridList, LayoutGrid } from '@/components';
import CharacterGridList from '@/components/characters/CharacterGridList/CharacterGridList';
import { useCharactersStore, useCollectionStore } from '@/stores';
import styles from './page.module.scss';

const MyCollectionPage = () => {
	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const favouriteIssues = useCollectionStore((s) => s.favouriteIssues);
	const favouriteCharacters = useCharactersStore((s) => s.favouriteCharacters);

	return (
		<div className={styles.page}>
			<LayoutGrid
				main={
					<>
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
					</>
				}
				aside={
					<CharacterGridList
						characters={favouriteCharacters}
						isGrid={false}
					/>
				}
			/>
		</div>
	);
};

export default MyCollectionPage;
