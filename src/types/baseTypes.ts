export interface ImageURL {
	icon_url: string;
	medium_url: string;
	screen_url: string;
	screen_large_url: string;
	small_url: string;
	super_url: string;
	thumb_url: string;
	tiny_url: string;
	original_url: string;
	image_tags: string;
}

export type baseResult<T> = {
	error: string;
	limit: number;
	offset: number;
	number_of_page_results: number;
	number_of_total_results: number;
	status_code: number;
	results: T[];
	version: string;
};
