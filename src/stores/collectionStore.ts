import { Issue } from '@/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type CollectionStore = {
	ownedIssues: Issue[];
	toggleOwnedIssue: (issue: Issue) => void;

	favouriteIssues: Issue[];
	toggleFavouriteIssue: (issue: Issue) => void;

	isOwned: (id: number) => boolean;
	isFavourite: (id: number) => boolean;
};

export const useCollectionStore = create<CollectionStore>()(
	immer((set, get) => ({
		ownedIssues: [],
		favouriteIssues: [],

		toggleOwnedIssue: (issue) =>
			set((state) => {
				const index = state.ownedIssues.findIndex((i) => i.id === issue.id);
				if (index >= 0) {
					state.ownedIssues.splice(index, 1);
				} else {
					state.ownedIssues.push(issue);
				}
			}),
		toggleFavouriteIssue: (issue) =>
			set((state) => {
				const index = state.favouriteIssues.findIndex((i) => i.id === issue.id);
				if (index >= 0) {
					state.favouriteIssues.splice(index, 1);
				} else {
					state.favouriteIssues.push(issue);
				}
			}),

		isOwned: (id) => {
			const state = get();
			return state.ownedIssues.some((issue) => issue.id === id);
		},
		isFavourite: (id) => {
			const state = get();
			return state.favouriteIssues.some((issue) => issue.id === id);
		},
	}))
);
