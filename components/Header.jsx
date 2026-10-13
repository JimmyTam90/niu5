import { SITE, publicPath } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b-4 border-brand bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href={publicPath("")} className="flex items-center gap-3" aria-label={`${SITE.brandName} home`}>
          <span className="flex items-center rounded-lg px-2.5 py-1.5 shadow-sm ring-1 ring-white/20"
            style={{ backgroundColor: SITE.logoChipBg }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logoPath} alt={`${SITE.brandName} logo`} height="32" className="h-8 w-auto" />
          </span>
          <span className="text-lg font-bold tracking-tight">{SITE.brandName}</span>
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm font-medium text-slate-200 md:flex">
          <a href="#featured" className="hover:text-white">Featured</a>
          <a href="#models" className="hover:text-white">Models</a>
          <a href="#range" className="hover:text-white">Full range</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
