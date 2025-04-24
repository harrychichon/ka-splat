import { BASE_URL } from '@/api';
import { extractResourcePath } from './extractResourcePath';

type SearchEntityArgs =
	| { resourceType: string; id: number }
	| { apiDetailUrl: string };

const searchEntity = async <T>(args: SearchEntityArgs): Promise<T> => {
	const path =
		'apiDetailUrl' in args
			? extractResourcePath(args.apiDetailUrl)
			: `${args.resourceType}/${args.id}`;

	const url = `${BASE_URL}/${path}/`;

	const res = await fetch(url);
	if (!res.ok) throw new Error('Failed to fetch entity');
	const json = await res.json();
	return json.results as T;
};

export default searchEntity;
