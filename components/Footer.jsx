import { SITE, publicPath } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm">
        <p className="max-w-3xl">
          {SITE.brandName} is an independent affiliate publisher and is not the official {SITE.merchantName} website. We may earn a
          commission from qualifying purchases made through links on this page, at no additional cost to you.
        </p>
        <nav aria-label="Legal" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a href={publicPath("/privacy")} className="underline hover:text-white">Privacy</a>
          <a href={publicPath("/terms")} className="underline hover:text-white">Terms</a>
          <a href={publicPath("/affiliate-disclosure")} className="underline hover:text-white">Affiliate disclosure</a>
          <a href={publicPath("/contact")} className="underline hover:text-white">Contact</a>
        </nav>
        <p className="mt-6 text-slate-400">© {new Date().getFullYear()} {SITE.brandName}. NIU and product names belong to their respective owners.</p>
      </div>
    </footer>
  );
}
