import { useCollectionStore } from '@/stores';
import { Issue } from '@/types';
import { useMemo } from 'react';

const useIssueCollectionStatus = (issueId: number, issue: Issue) => {
	const {
		ownedIssues,
		favouriteIssues,
		toggleOwnedIssue,
		toggleFavouriteIssue,
	} = useCollectionStore((s) => ({
		ownedIssues: s.ownedIssues,
		favouriteIssues: s.favouriteIssues,
		toggleOwnedIssue: s.toggleOwnedIssue,
		toggleFavouriteIssue: s.toggleFavouriteIssue,
	}));

	const isOwned = useMemo(
		() => ownedIssues.some((i) => i.id === issueId),
		[ownedIssues, issueId]
	);

	const isFavourite = useMemo(
		() => favouriteIssues.some((i) => i.id === issueId),
		[favouriteIssues, issueId]
	);

	const toggleOwned = () => {
		if (issue) toggleOwnedIssue(issue);
	};

	const toggleFavourite = () => {
		if (issue) toggleFavouriteIssue(issue);
	};

	return { isOwned, isFavourite, toggleOwned, toggleFavourite };
};

export default useIssueCollectionStatus;
