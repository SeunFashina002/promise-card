/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "firebasestorage.googleapis.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
