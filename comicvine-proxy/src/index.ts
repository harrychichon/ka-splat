export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const apiKey = env.COMICVINE_API_KEY;

		const url = new URL(request.url);
		const searchParams = url.searchParams;

		const comicVineURL = new URL('https://comicvine.gamespot.com/api/search/');
		comicVineURL.search = searchParams.toString();
		comicVineURL.searchParams.set('api_key', apiKey);
		comicVineURL.searchParams.set('format', 'json');

		const response = await fetch(comicVineURL.toString(), {
			headers: {
				'User-Agent': 'ka-splat-proxy',
				Accept: 'application/json',
			},
		});

		const body = await response.text();

		return new Response(body, {
			status: response.status,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
	},
};
