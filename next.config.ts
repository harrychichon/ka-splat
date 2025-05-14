import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'src')],
	},
	images: {
		domains: ['comicvine.gamespot.com'],
	},
};

export default nextConfig;
