import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: "/images/lbm9r0sm/production/**",
			},
			{
				protocol: "https",
				hostname: "circleofleaders.co.uk",
				pathname: "/assets/images/logos/**",
			},
		],
	},
};

export default nextConfig;