import { LiveSearchItem } from '@/components/search/LiveSearchResults/LiveSearchResults';
import type { Issue } from '@/types/';

export const isIssue = (item: LiveSearchItem): item is Issue => {
	return item.resource_type === 'issue';
};
