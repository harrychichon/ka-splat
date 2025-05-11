import { Issue } from '@/types';
import { create } from 'zustand';

type UIStore = {
	loading: boolean;
	setLoading: (value: boolean) => void;

	error: string | null;
	setError: (msg: string | null) => void;

	openModal: boolean;
	setOpenModal: (value: boolean) => void;

	activeIssue: Issue | null;
	setActiveIssue: (issue: Issue | null) => void;

	reset: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
	loading: false,
	setLoading: (loading) => set({ loading }),

	error: null,
	setError: (error) => set({ error }),

	openModal: false,
	setOpenModal: (openModal) => set({ openModal }),

	activeIssue: null,
	setActiveIssue: (issue) => set({ activeIssue: issue }),

	reset: () =>
		set({
			loading: false,
			error: null,
			openModal: false,
			activeIssue: null,
		}),
}));
