import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import AffiliateCTA from "@/components/AffiliateCTA";
import ProductCard from "@/components/ProductCard";
import StickyCTA from "@/components/StickyCTA";
import { PRODUCTS, CATEGORIES, FAQS, HERO_PRODUCTS } from "@/lib/products";


const heroItems = HERO_PRODUCTS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
const heroMain = heroItems[0];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Hero: mobile order = image -> title/description -> CTA */}
        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16">
            {heroMain && (
              <div className="order-1 lg:order-2">
                <div className="mx-auto w-full max-w-md lg:max-w-lg">
                  <SafeImage src={heroMain.image.src} alt={heroMain.image.alt} priority className="bg-white/10" />
                </div>
              </div>
            )}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Electric scooters and e-bikes for the daily commute</h1>
              <p className="mt-4 max-w-xl text-lg text-slate-300">
                Compare NIU&apos;s KQi kick scooters, the carbon fiber KQi Air, and the BQi-C3 Pro e-bike, then continue to NIU&apos;s store to check current details.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {heroMain && <AffiliateCTA productKey={heroMain.affiliateKey} label={`Shop ${heroMain.name}`} placement="hero_primary" />}
                <AffiliateCTA productKey="all-scooters" label="Browse all scooters" placement="hero_secondary" variant="dark" className="border border-white/30" />
              </div>
              <p className="mt-4 text-sm text-slate-400">Affiliate link: we may earn a commission at no extra cost to you. Links open NIU&apos;s store in a new tab.</p>
            </div>
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold">Featured models</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {heroItems.map((item) => <ProductCard key={item.id} item={item} placement="featured" ctaLabel={`Shop ${item.name}`} />)}
          </div>
        </section>

        <section id="models" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-3xl font-bold">NIU scooters and e-bikes</h2>
            <p className="mt-2 max-w-2xl text-slate-600">Check NIU&apos;s product pages for current specifications, pricing, and availability.</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((item) => <ProductCard key={item.id} item={item} placement="product_card" />)}
            </div>
          </div>
        </section>

        <section id="range" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold">Browse the full range</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((item) => <ProductCard key={item.id} item={item} placement="category_card" ctaLabel={`See ${item.name.toLowerCase()}`} />)}
          </div>
        </section>

        <section id="faq" className="bg-slate-50">
          <div className="mx-auto max-w-3xl px-4 py-12">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {FAQS.map((f) => (
                <details key={f.q} className="group p-4">
                  <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
                  <p className="mt-2 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-3xl font-bold">Ready to look at the lineup?</h2>
          <div className="mt-6 flex justify-center">
            <AffiliateCTA productKey="all-scooters" label="Shop NIU scooters" placement="final" />
          </div>
          <p className="mt-3 text-sm text-slate-500">Affiliate link. Opens NIU&apos;s store in a new tab.</p>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
