export type SearchQueryResult<T> = {
	results: T[];
	total: number;
};

export type SearchResult =
	| SearchResultIssue
	| SearchResultCharacter
	| SearchResultVolume
	| SearchResultStoryArc
	| SearchResultPublisher;

export type SearchResultBase = {
	id: number;
	name: string;
	api_detail_url: string;
	resource_type: string;
	site_detail_url?: string;
	image?: {
		icon_url: string;
		medium_url: string;
		thumb_url: string;
	};
};

export type SearchResultIssue = SearchResultBase & {
	resource_type: 'issue';
};

export type SearchResultCharacter = SearchResultBase & {
	resource_type: 'character';
};

export type SearchResultVolume = SearchResultBase & {
	resource_type: 'volume';
};

export type SearchResultStoryArc = SearchResultBase & {
	resource_type: 'story_arc';
};

export type SearchResultPublisher = SearchResultBase & {
	resource_type: 'publisher';
};
