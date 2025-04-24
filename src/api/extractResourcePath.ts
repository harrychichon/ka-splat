export const extractResourcePath = (apiDetailUrl: string): string => {
	const match = apiDetailUrl.match(/\/api\/(.*)/);
	if (!match) throw new Error('Invalid ComicVine URL');
	return match[1]; // returns "character/4005-1699" for example
};
