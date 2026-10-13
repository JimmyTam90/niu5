import "./globals.css";
import { SITE, publicUrl } from "@/lib/site-config";
import Analytics from "@/components/Analytics";

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: { default: `NIU Electric Scooters & E-Bikes | ${SITE.brandName}`, template: `%s | ${SITE.brandName}` },
  description: "Explore NIU electric kick scooters, carbon fiber scooters, e-bikes, and accessories. Shop on NIU's store via our affiliate links.",
  alternates: { canonical: publicUrl("") },
  openGraph: {
    type: "website", locale: SITE.locale, siteName: SITE.brandName, url: publicUrl(""),
    title: `NIU Electric Scooters & E-Bikes | ${SITE.brandName}`,
    description: "Explore NIU electric kick scooters, carbon fiber scooters, e-bikes, and accessories.",
  },
  icons: { icon: SITE.logoPath },
  robots: { index: true, follow: true },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0F172A" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
