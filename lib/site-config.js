export const SITE = {
  projectName: "niu",
  brandName: "PrimeGearLab",
  merchantName: "NIU",
  sourceWebsite: "https://shop.niu.com",
  baseUrl: "https://primegearlab.com",
  publicSubpath: "/niu",
  // public/logo.png (file name must be exactly lowercase "logo.png").
  logoPath: `${process.env.NEXT_PUBLIC_SPOKE_ORIGIN || ""}/logo.png`,
  contactEmail: "daniaengracia26377@gmail.com",
  locale: "en_US",
  tagline: "Urban electric scooters and e-bikes from NIU",
};

// Public (Hub) paths. Plain <a> is used for internal pages so navigation stays under the Hub subpath.
export const publicPath = (p = "") => `${SITE.publicSubpath}${p}`;
export const publicUrl = (p = "") => `${SITE.baseUrl}${SITE.publicSubpath}${p}`;

// Tried in order; if one fails to load the next is used, and if all fail the logo is hidden (brand text remains).
const origin = process.env.NEXT_PUBLIC_SPOKE_ORIGIN || "";
export const LOGO_SOURCES = [...new Set([origin ? `${origin}/logo.png` : "/logo.png", "/niu/logo.png", "/logo.png"])];

export const TRACKING = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID || "",
  googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};
