// Fire-and-forget; never blocks or breaks navigation.
export function trackAffiliateClick({ productKey, label, placement }) {
  try {
    if (typeof window === "undefined") return;
    const params = { item_id: productKey, item_name: label, placement };
    if (typeof window.gtag === "function") window.gtag("event", "affiliate_click", params);
    if (typeof window.fbq === "function") window.fbq("trackCustom", "AffiliateClick", params);
  } catch {
    /* ignore */
  }
}
