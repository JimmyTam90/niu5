import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = { title: "Terms of Use", alternates: { canonical: publicUrl("/terms") } };

export default function Page() {
  return (
    <LegalPage title="Terms of Use">
      <p>By using this site you agree to these terms. This site provides general information about NIU products and links to NIU&apos;s store. It is not legal, financial, or safety advice.</p>
      <p>Product details, prices, availability, shipping, returns, and warranty terms are controlled by NIU and may change without notice. Always confirm them on NIU&apos;s website before buying.</p>
      <p>{SITE.brandName} is an independent publisher, is not the official NIU website, and is not responsible for the content or practices of third-party sites. Use electric scooters and bikes in line with local laws and safety guidance.</p>
      <p>Contact: <a className="text-brand underline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
    </LegalPage>
  );
}
