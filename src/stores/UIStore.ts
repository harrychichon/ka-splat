import { create } from 'zustand';

type UIStore = {
	loading: boolean;
	setLoading: (value: boolean) => void;

	error: string | null;
	setError: (msg: string | null) => void;

	reset: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
	loading: false,
	setLoading: (loading) => set({ loading }),

	error: null,
	setError: (error) => set({ error }),

	reset: () => set({ loading: false, error: null }),
}));
