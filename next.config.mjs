/** @type {import('next').NextConfig} */
const nextConfig = {
	logging: {
		fetches: {
			fullUrl: true
		}
	},
	images: {
		domains: ['cdn.sanity.io']
	}
};

export default nextConfig;
