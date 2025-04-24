export type Volume = {
	id: number;
	name: string;
	api_detail_url: string;
	issues: {
		api_detail_url: string;
		id: number;
		name: string;
	}[];
};
