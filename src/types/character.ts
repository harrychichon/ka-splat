import { ImageURL } from '@/types';

export type Character = {
	aliases: string;
	api_detail_url: string;
	birth: null;
	count_of_issue_appearances: number;
	date_added: Date;
	date_last_updated: Date;
	deck: string;
	description: string;
	first_appeared_in_issue: FirstAppearedInIssue;
	gender: number;
	id: number;
	image: ImageURL;
	name: string;
	origin: FirstAppearedInIssue;
	publisher: FirstAppearedInIssue;
	real_name: string;
	site_detail_url: string;
};

export type FirstAppearedInIssue = {
	api_detail_url: string;
	id: number;
	name: string;
	issue_number?: string;
};
