import { SITE, publicPath } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href={publicPath("")} className="flex items-center gap-2" aria-label={`${SITE.brandName} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SITE.logoPath} alt={`${SITE.brandName} logo`} height="36" className="h-9 w-auto" />
          <span className="text-lg font-bold">{SITE.brandName}</span>
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#featured" className="hover:text-brand">Featured</a>
          <a href="#models" className="hover:text-brand">Models</a>
          <a href="#range" className="hover:text-brand">Full range</a>
          <a href="#faq" className="hover:text-brand">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
