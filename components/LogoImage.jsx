"use client";
import { useState } from "react";
import { LOGO_SOURCES } from "@/lib/site-config";

// Transparent logo shown directly on the header background. Falls back through LOGO_SOURCES, then hides.
export default function LogoImage({ alt }) {
  const [i, setI] = useState(0);
  if (i >= LOGO_SOURCES.length) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={LOGO_SOURCES[i]} alt={alt} height="40" onError={() => setI(i + 1)} className="h-10 w-auto" />
  );
}
