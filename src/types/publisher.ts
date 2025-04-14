import { ImageURL } from '@/types';

export type Publisher = {
	aliases: string | null;
	api_detail_url: string;
	date_added: Date;
	date_last_updated: Date;
	deck: string;
	description: string;
	id: number;
	image: ImageURL;
	location_address: string;
	location_city: string;
	location_state: string;
	name: string;
	site_detail_url: string;
};
