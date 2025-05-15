'use client';
import { Dashboard, IssueGridList } from '@/components';
import { useCollectionStore } from '@/stores';

const MyCollectionPage = () => {
	const ownedIssues = useCollectionStore((s) => s.ownedIssues);
	const favouriteIssues = useCollectionStore((s) => s.favouriteIssues);

	return (
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
	);
};

export default MyCollectionPage;
