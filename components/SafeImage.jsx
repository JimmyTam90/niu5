"use client";
import { useState } from "react";

// Hotlinks NIU's official CDN image. If a request fails, shows the alt text (never a different product's image).
export default function SafeImage({ src, alt, ratio = "aspect-square", fit = "object-contain", priority = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-slate-100 ${ratio} ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm text-slate-500">
          {alt}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async"
          referrerPolicy="no-referrer" onError={() => setFailed(true)} className={`absolute inset-0 h-full w-full ${fit}`} />
      )}
    </div>
  );
}
