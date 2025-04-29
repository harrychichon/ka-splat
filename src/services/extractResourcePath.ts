import { ERROR_MESSAGES } from '@/constants';

export const extractResourcePath = (apiDetailUrl: string): string => {
	const match = apiDetailUrl.match(/\/api\/(.*)/); // RegEx to find the /api/ part of the URL to capture what comes after it (e.g character/4005-1699)
	if (!match)
		throw new Error(ERROR_MESSAGES.debug.invalidComicVineUrl(apiDetailUrl));
	return match[1]; // returns "character/4005-1699" for example
};
