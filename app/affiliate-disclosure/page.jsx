import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = { title: "Affiliate Disclosure", alternates: { canonical: publicUrl("/affiliate-disclosure") } };

export default function Page() {
  return (
    <LegalPage title="Affiliate Disclosure">
      <p>{SITE.brandName} is an affiliate publisher. We may earn a commission from qualifying purchases made through links on this page, at no additional cost to you.</p>
      <p>Links to NIU&apos;s store contain a tracking identifier that lets NIU attribute visits to us. We do not control NIU&apos;s pricing, policies, or whether a commission is paid.</p>
      <p>This site is independent and is not endorsed by or the official website of NIU.</p>
    </LegalPage>
  );
}
