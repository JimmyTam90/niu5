import data from "./affiliate-links.json";

const isHttpUrl = (v) => {
  if (typeof v !== "string") return false;
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
};

/**
 * Single source of truth for every CTA. Returns the supplied URL string EXACTLY (never rebuilt/appended).
 * status is PROVIDED_NOT_RUNTIME_VERIFIED: syntax-checked only, attribution not tested.
 */
export function resolveAffiliateUrl(productKey) {
  const mapped = data.products?.[productKey];
  if (isHttpUrl(mapped)) return { url: mapped, source: "PRODUCT_MAPPING", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  if (isHttpUrl(data.defaultUrl)) return { url: data.defaultUrl, source: "DEFAULT_FALLBACK", status: "PROVIDED_NOT_RUNTIME_VERIFIED" };
  return { url: null, source: "NONE", status: "BLOCKED_MISSING_AFFILIATE_URL" };
}

export const affiliateKeys = Object.keys(data.products || {});
