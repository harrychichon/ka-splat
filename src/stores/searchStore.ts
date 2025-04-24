import { Issue } from '@/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type searchStore = {
	activeIssues: Issue[];
	setActiveIssues: (issues: Issue[]) => void;
};

const initialState: searchStore = {
	activeIssues: [],
	setActiveIssues: () => {},
};

export const useSearchStore = create<searchStore>()(
	immer((set) => ({
		...initialState,
		setActiveIssues: (issues) => set({ activeIssues: issues }),
	}))
);
