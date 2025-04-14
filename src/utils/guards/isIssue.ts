import type { Issue } from '@/types/';
import { createArrayGuard } from '@/utils/';

export const isIssue = (data: unknown): data is Issue => {
	return (
		!!data && typeof data === 'object' && 'id' in data && 'issue_number' in data
	);
};

export const isIssueArray = createArrayGuard(isIssue);
