import { ERROR_MESSAGES } from '@/constants';
import { NextRequest } from 'next/server';

const cache = new Map<string, string>();

type RouteContext = { params: { comicvine: string[] } };

export async function GET(req: NextRequest, context: RouteContext) {
	const { params } = context;
	const apiKey = process.env.COMICVINE_API_KEY;
	if (!apiKey) {
		return new Response(
			JSON.stringify({ error: ERROR_MESSAGES.api.missingApiKey }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}

	const path = params.comicvine.slice(1).join('/') || 'search';
	const searchParams = req.nextUrl.searchParams.toString();
	const cacheKey = `${path}?${searchParams}`;

	// Serve from cache if possible
	if (cache.has(cacheKey)) {
		return new Response(cache.get(cacheKey)!, {
			headers: {
				'Content-Type': 'application/json',
				'X-Cache': 'HIT',
			},
		});
	}

	try {
		const apiUrl = new URL(`https://comicvine.gamespot.com/api/${path}/`);
		console.log('📡 ComicVine API URL:', apiUrl.toString());

		apiUrl.search = searchParams;
		apiUrl.searchParams.set('api_key', apiKey);
		apiUrl.searchParams.set('format', 'json');

		const res = await fetch(apiUrl.toString(), {
			headers: {
				'User-Agent': 'ka-splat-proxy',
				Accept: 'application/json',
			},
		});
		console.log('🔍 Final ComicVine URL:', apiUrl.toString());

		const body = await res.text();

		cache.set(cacheKey, body);

		return new Response(body, {
			status: res.status,
			headers: {
				'Content-Type': 'application/json',
				'X-Cache': 'MISS',
			},
		});
	} catch (err: any) {
		console.error(ERROR_MESSAGES.api.proxyError, err);
		return new Response(
			JSON.stringify({ error: ERROR_MESSAGES.api.proxyError }),
			{
				status: 502,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
}
