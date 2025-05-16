import { ImageURL } from './baseTypes';
import { Review } from './review';

export type Issue = {
	aliases: string | null;
	api_detail_url: string;
	cover_date: string;
	date_added: string;
	date_last_updated: string;
	deck: string | null;
	description: string | null;
	has_staff_review: boolean;
	id: number;
	image: ImageURL;
	associated_images: IssueAssociatedImage[];
	issue_number: string;
	name: string | null;
	personCredits: string[];
	site_detail_url: string;
	store_date: string | null;
	story_arc_credits: string | null;
	volume: IssueVolumeSmall | null;
	review?: Review | null;
	resource_type: 'issue';
};

export type IssueAssociatedImage = {
	original_url: string;
	id: number;
	caption: string | null;
	image_tags: string;
};

export type IssueVolumeSmall = {
	api_detail_url: string;
	id: number;
	name: string;
	site_detail_url: string;
};
