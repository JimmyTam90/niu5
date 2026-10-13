import SafeImage from "./SafeImage";
import AffiliateCTA from "./AffiliateCTA";

// Mobile order (and desktop): image -> title & description -> CTA
export default function ProductCard({ item, placement, ctaLabel = "View on NIU" }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4">
      <SafeImage src={item.image.src} alt={item.image.alt} ratio="aspect-[4/3]" />
      <div className="mt-4 flex-1">
        {item.category && <p className="text-sm text-slate-500">{item.category}</p>}
        <h3 className="mt-1 text-xl font-bold">{item.name}</h3>
        <p className="mt-2 text-slate-600">{item.description}</p>
      </div>
      <div className="mt-4">
        <AffiliateCTA productKey={item.affiliateKey} label={ctaLabel} placement={placement} className="sm:w-full" />
      </div>
    </article>
  );
}
