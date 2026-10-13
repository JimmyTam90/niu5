import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = { title: "Contact", alternates: { canonical: publicUrl("/contact") } };

export default function Page() {
  return (
    <LegalPage title="Contact">
      <p>Questions about this site? Email us at <a className="text-brand underline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
      <p>For orders, shipping, returns, or warranty questions, please contact NIU directly through their website.</p>
    </LegalPage>
  );
}
