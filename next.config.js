/** @type {import('next').NextConfig} */
// Hub–Spoke: the Hub rewrites /niu/:path* -> <SPOKE>/:path*, so NO basePath here.
// assetPrefix points /_next/static/* at the Spoke origin (set SPOKE_PROJECT_URL at BUILD time).
const spokeOrigin = (process.env.SPOKE_PROJECT_URL || "").replace(/\/+$/, "");
const useAssetPrefix = process.env.NODE_ENV === "production" && /^https:\/\/[^/]+$/.test(spokeOrigin);

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  ...(useAssetPrefix ? { assetPrefix: spokeOrigin } : {}),
  poweredByHeader: false,
  // Lets the Spoke also answer under the public subpath, so /niu/privacy, /niu/logo.png etc. work
  // both through the Hub and when the Spoke is opened directly. Does not change basePath or assets.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/niu/:path*", destination: "/:path*" }],
    };
  },
};

module.exports = nextConfig;
