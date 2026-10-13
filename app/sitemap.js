import { publicUrl } from "@/lib/site-config";

export default function sitemap() {
  return ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({
    url: publicUrl(p),
    lastModified: new Date(),
  }));
}
