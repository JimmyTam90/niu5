/** @type {import('next').NextConfig} */
// Hub–Spoke: primegearlab.com/niu is served by this project (the Spoke) through a rewrite.
// CSS/JS under /_next/static must load from the Spoke's own origin, otherwise the browser asks
// primegearlab.com/_next/... (not rewritten) and the page appears unstyled.
// Override at build time with SPOKE_PROJECT_URL if the Vercel address changes.
const DEFAULT_SPOKE_ORIGIN = "https://niu5-ten.vercel.app";
const candidate = (process.env.SPOKE_PROJECT_URL || DEFAULT_SPOKE_ORIGIN).replace(/\/+$/, "");
const isProd = process.env.NODE_ENV === "production";
const spokeOrigin = /^https:\/\/[^/]+$/.test(candidate) ? candidate : "";

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  ...(isProd && spokeOrigin ? { assetPrefix: spokeOrigin } : {}),
  // Exposed to code so public files (logo) can use an absolute Spoke URL in production.
  env: { NEXT_PUBLIC_SPOKE_ORIGIN: isProd ? spokeOrigin : "" },
  // Also answer under /niu when the Spoke is opened directly (see v5).
  async rewrites() {
    return { beforeFiles: [{ source: "/niu/:path*", destination: "/:path*" }] };
  },
};

module.exports = nextConfig;
