import type { Publisher } from '@/types/';
import { createArrayGuard } from '@/utils';

export const isPublisher = (data: unknown): data is Publisher => {
	return !!data && typeof data === 'object' && 'id' in data && 'name' in data;
};

export const isPublisherArray = createArrayGuard(isPublisher);
