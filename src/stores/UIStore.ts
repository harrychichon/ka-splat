import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type UIStore = {
	loading: boolean;
	setLoading: (value: boolean) => void;

	error: string | null;
	setError: (msg: string | null) => void;

	reset: () => void;
};

export const useUIStore = create<UIStore>()(
	immer((set) => ({
		loading: false,
		error: null,

		setLoading: (loading) => set({ loading }),
		setError: (error) => set({ error }),

		reset: () => set({ loading: false, error: null }),
	}))
);
