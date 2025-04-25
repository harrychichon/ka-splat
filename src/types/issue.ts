import { ImageURL } from './baseTypes';

export type Issue = {
	aliases: null;
	api_detail_url: string;
	cover_date: Date;
	date_added: Date;
	date_last_updated: Date;
	deck: null;
	description: null | string;
	has_staff_review: boolean;
	id: number;
	image: ImageURL;
	associated_images: AssociatedImage[];
	issue_number: string;
	name: null | string;
	site_detail_url: string;
	store_date: Date | null;
	volume: VolumeSmall | null;
};

export type AssociatedImage = {
	original_url: string;
	id: number;
	caption: string | null;
	image_tags: string;
};

export type VolumeSmall = {
	api_detail_url: string;
	id: number;
	name: string;
	site_detail_url: string;
};
