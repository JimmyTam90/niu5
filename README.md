# niu — PrimeGearLab affiliate landing page (Next.js 14.2.35, JavaScript)

## Run
    npm install
    npm run build      # runs the affiliate-link check, then next build
    npm run dev

## Add your file
    public/logo.png    -> loaded from the Spoke origin (https://niu5-ten.vercel.app/logo.png) in production
Product/category images are NOT local: they hotlink NIU's official Shopify CDN (see `lib/images.js`).
Products with no verified NIU image (KQi3 Max, KQi3 Pro, KQi2 Pro) are not rendered.
Run `npm run check:live` locally to see HTTP status for every affiliate URL and image URL.

## Hub–Spoke (assumed; verify against your Hub vercel.json)
Hub (primegearlab.com) must rewrite BOTH the page and Next assets/public files, e.g.:
    { "source": "/niu",        "destination": "https://niu5-ten.vercel.app/" },
    { "source": "/niu/:path*", "destination": "https://niu5-ten.vercel.app/:path*" }
- No `basePath`; `trailingSlash: false`.
- `assetPrefix` = SPOKE_PROJECT_URL in production, so set it in Vercel env BEFORE building.
- Internal pages use plain `<a href="/niu/...">` so navigation stays under the Hub subpath.
- Canonicals/sitemap/robots use https://primegearlab.com/niu.

## Affiliate links (updated)
Broken deep links (404 on NIU's live store) were replaced with live product URLs plus your `?ref=ghtakjkm`. KQi3 Max / KQi3 Pro / KQi2 Pro are no longer in NIU's catalog, so they have no mapping and are hidden.

`lib/affiliate-links.json` holds your exact URLs. `resolveAffiliateUrl(key)` returns them unchanged (fallback: default URL). Every CTA opens with target="_blank" rel="noopener noreferrer".

## Tracking (env vars, blank = off)
NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_GOOGLE_ADS_ID, NEXT_PUBLIC_META_PIXEL_ID. Click event: `affiliate_click`. Add a consent banner if your audience/policy requires it.

## Not verified (no network when generated)
Build, product facts/prices/availability, merchant policies, live affiliate attribution, Hub proxy, tracking events.
