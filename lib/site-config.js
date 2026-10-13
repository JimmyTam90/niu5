export const SITE = {
  projectName: "niu",
  brandName: "PrimeGearLab",
  merchantName: "NIU",
  sourceWebsite: "https://shop.niu.com",
  baseUrl: "https://primegearlab.com",
  publicSubpath: "/niu",
  logoPath: "/niu/logo.png",
  // Header sits on brand navy; the transparent logo sits on this chip. Change if your logo is white/light (e.g. "#0F172A").
  logoChipBg: "#FFFFFF",
  contactEmail: "daniaengracia26377@gmail.com",
  locale: "en_US",
  tagline: "Urban electric scooters and e-bikes from NIU",
};

// Public (Hub) paths. Plain <a> is used for internal pages so navigation stays under the Hub subpath.
export const publicPath = (p = "") => `${SITE.publicSubpath}${p}`;
export const publicUrl = (p = "") => `${SITE.baseUrl}${SITE.publicSubpath}${p}`;

export const TRACKING = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID || "",
  googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};
