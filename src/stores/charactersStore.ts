import { Character } from '@/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type CharactersStore = {
	favouriteCharacters: Character[];
	toggleFavouriteCharacter: (character: Character) => void;
	isFavourite: (id: number) => boolean;
};

export const useCharactersStore = create<CharactersStore>()(
	immer((set, get) => ({
		favouriteCharacters: [],

		toggleFavouriteCharacter: (character) =>
			set((state) => {
				const index = state.favouriteCharacters.findIndex(
					(i) => i.id === character.id
				);
				if (index >= 0) {
					state.favouriteCharacters.splice(index, 1);
				} else {
					state.favouriteCharacters.push(character);
					console.log('⭐ Added character', character.name);
				}
			}),

		isFavourite: (id) => {
			const state = get();
			return state.favouriteCharacters.some((character) => character.id === id);
		},
	}))
);
