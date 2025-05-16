import { ImageURL } from './baseTypes';

export type Character = {
	aliases: string | null;
	count_of_issue_appearances: number;
	deck: string;
	first_appeared_in_issue: {
		api_detail_url: string;
		id: number;
		name: string;
		issue_number: number;
	};
	id: number;
	image: ImageURL;
	name: string;
	real_name: string;
	resource_type: 'character';
};
