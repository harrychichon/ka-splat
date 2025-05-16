import { LiveSearchItem } from '@/components/search/LiveSearchResults/LiveSearchResults';
import type { Character } from '@/types/';

export const isCharacter = (item: LiveSearchItem): item is Character => {
	return item.resource_type === 'character';
};
