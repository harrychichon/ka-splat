import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type FavouriteType = 'character' | 'planet' | 'ship';

type Favourites = Record<FavouriteType, number[]>;

type FavouriteStore = {
	favourites: Favourites;
	activeFavourite: { type: FavouriteType; id: number } | null;
	toggleFavourite: (type: FavouriteType, id: number) => void;
	isFavourite: (type: FavouriteType, id: number) => boolean;
	setActiveFavourite: (type: FavouriteType, id: number) => void;
};

const favouriteStore = create<FavouriteStore>()(
	persist(
		immer((set, get) => ({
			favourites: {
				character: [],
				planet: [],
				ship: [],
			},
			activeFavourite: null,
			toggleFavourite(type, id) {
				const ids = get().favourites[type];
				const index = ids.indexOf(id);

				set((state) => {
					if (index === -1) {
						state.favourites[type].push(id);
					} else {
						state.favourites[type].splice(index, 1);
					}
				});
			},
			isFavourite(type, id) {
				return get().favourites[type].includes(id);
			},
			setActiveFavourite(type, id) {
				set({ activeFavourite: { type, id } });
			},
		})),
		{
			name: 'favourite-storage',
			partialize: (state) => ({
				favourites: state.favourites, // ✅ only save this part
			}),
		}
	)
);

export default favouriteStore;
