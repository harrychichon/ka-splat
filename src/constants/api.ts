export const API_KEY = process.env.COMICVINE_API_KEY;

export const BASE_URL = '/api/comicvine';

export const SEARCH_ENDPOINT = '/api/comicvine/search';

export type Endpoint = {
	detail: string;
	list: string;
	id: number;
};

export const endpoints: Endpoint[] = [
	{ detail: 'character', list: 'characters', id: 4005 },
	{ detail: 'chat', list: 'chats', id: 2450 },
	{ detail: 'concept', list: 'concepts', id: 4015 },
	{ detail: 'episode', list: 'episodes', id: 4070 },
	{ detail: 'issue', list: 'issues', id: 4000 },
	{ detail: 'location', list: 'locations', id: 4020 },
	{ detail: 'movie', list: 'movies', id: 4025 },
	{ detail: 'object', list: 'objects', id: 4055 },
	{ detail: 'origin', list: 'origins', id: 4030 },
	{ detail: 'person', list: 'people', id: 4040 },
	{ detail: 'power', list: 'powers', id: 4035 },
	{ detail: 'promo', list: 'promos', id: 1700 },
	{ detail: 'publisher', list: 'publishers', id: 4010 },
	{ detail: 'series', list: 'series', id: 4075 },
	{ detail: 'story_arc', list: 'story_arcs', id: 4045 },
	{ detail: 'team', list: 'teams', id: 4060 },
	{ detail: 'video', list: 'videos', id: 2300 },
	{ detail: 'video_type', list: 'video_types', id: 2320 },
	{ detail: 'video_category', list: 'video_categories', id: 2320 },
	{ detail: 'volume', list: 'volumes', id: 4050 },
] as const; // as const to enforce values as literals so TS doesnt just read them as type string/number

// Keeps code clean so I dont need to use "typeof..." everytime
export type DetailResourceName = (typeof endpoints)[number]['detail'];
export type ListResourceName = (typeof endpoints)[number]['list'];
