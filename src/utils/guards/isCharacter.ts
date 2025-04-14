import type { Character } from '@/types/';
import { createArrayGuard } from '@/utils/';

export const isCharacter = (data: unknown): data is Character => {
	if (!data || typeof data !== 'object') return false;

	return 'id' in data && 'name' in data && 'real_name' in data;
};

export const isCharacterArray = createArrayGuard(isCharacter);
