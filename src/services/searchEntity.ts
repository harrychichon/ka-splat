import { BASE_URL, ERROR_MESSAGES } from '@/constants';
import { extractResourcePath } from './extractResourcePath';

type SearchEntityArgs =
	| { resourceType: string; id: number }
	| { apiDetailUrl: string };

const searchEntity = async <T>(args: SearchEntityArgs): Promise<T | null> => {
	try {
		const path =
			'apiDetailUrl' in args
				? extractResourcePath(args.apiDetailUrl)
				: `${args.resourceType}/${args.id}`;

		const url = `${BASE_URL}/${path}/`;

		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(ERROR_MESSAGES.debug.entityFetchFailed(url));
		}
		const json = await res.json();
		return json.results as T;
	} catch (error) {
		console.error(ERROR_MESSAGES.debug.searchEntityError, error);
		return null;
	}
};

export default searchEntity;
