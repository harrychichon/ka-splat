import { SearchResultIssue } from '@/types';
import { createArrayGuard } from './createArrayGuard';

export const isSearchResultIssue = (val: unknown): val is SearchResultIssue => {
	return (
		typeof val === 'object' &&
		val !== null &&
		(val as any).resource_type === 'issue'
	);
};

export const isSearchResultIssueArray = createArrayGuard(isSearchResultIssue);
