import AffiliateCTA from "./AffiliateCTA";

// Mobile-only bar; the in-flow CTAs remain. Opens in a new tab like all CTAs.
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-4 pt-3 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <AffiliateCTA productKey="all-scooters" label="Shop NIU scooters" placement="sticky_mobile" />
    </div>
  );
}
