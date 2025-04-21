import { Issue } from '@/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type IssueStore = {
	activeIssues: Issue[];
	setActiveIssues: (issues: Issue[]) => void;
};

export const useIssueStore = create<IssueStore>()(
	immer((set) => ({
		activeIssues: [],
		setActiveIssues: (issues) => set({ activeIssues: issues }),
	}))
);
