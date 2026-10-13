import LegalPage from "@/components/LegalPage";
import { SITE, publicUrl } from "@/lib/site-config";

export const metadata = { title: "Privacy Policy", alternates: { canonical: publicUrl("/privacy") } };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This page explains what information may be collected when you visit this site. {SITE.brandName} does not sell products and does not process payments; purchases happen on NIU&apos;s website.</p>
      <p>If analytics or advertising tools (such as Google Analytics, Google Ads, or Meta Pixel) are enabled on this site, they may use cookies or similar technologies to collect information like pages viewed, device and browser data, approximate location, and clicks on affiliate links. These tools are only active when configured by the site operator.</p>
      <p>When you click a link, you leave this site for NIU&apos;s store, which has its own privacy practices. Please review them there.</p>
      <p>Questions or requests about your data: <a className="text-brand underline" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
    </LegalPage>
  );
}
