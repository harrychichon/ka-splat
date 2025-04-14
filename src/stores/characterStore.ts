import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type Character = {
	id: number;
	name: string;
	age: number;
	race: string;
};

type CharacterStore = {
	activeCharacter: Character | null;
	setActiveCharacter: (character: Character) => void;
	characters: Character[];
	setCharacters: (characters: Character[]) => void;
};

export const useCharacterStore = create<CharacterStore>()(
	immer((set) => ({
		activeCharacter: null,
		characters: [],
		setActiveCharacter: (character) => set({ activeCharacter: character }),
		setCharacters: (characters) => set({ characters }),
	}))
);
