import type { SearchResultVolume } from '@/types/';
import { createArrayGuard } from '@/utils/';

export const isSearchResultVolume = (
	val: unknown
): val is SearchResultVolume => {
	return (
		typeof val === 'object' &&
		val !== null &&
		(val as any).resource_type === 'volume'
	);
};

export const isVolumeArray = createArrayGuard(isSearchResultVolume);
