"use client";
import { resolveAffiliateUrl } from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/track";

const STYLES = {
  primary: "bg-brand text-white hover:bg-brandDark",
  dark: "bg-ink text-white hover:bg-slate-800",
};

// Always opens in a NEW TAB. href is the exact supplied URL from the central resolver.
export default function AffiliateCTA({ productKey, label = "Shop on NIU", placement = "page", variant = "primary", className = "" }) {
  const { url } = resolveAffiliateUrl(productKey);
  const base = `inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-colors sm:w-auto ${className}`;
  if (!url) {
    return <span aria-disabled="true" className={`${base} cursor-not-allowed bg-slate-200 text-slate-500`}>Link unavailable</span>;
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      onClick={() => trackAffiliateClick({ productKey, label, placement })}
      className={`${base} ${STYLES[variant] || STYLES.primary}`}>
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
