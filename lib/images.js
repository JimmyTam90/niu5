// Official NIU image URLs, taken from shop.niu.com collection listings (Shopify CDN).
// Verified = the file path appeared on NIU's live pages. width is a standard Shopify CDN resize parameter.
// Run `npm run check:live` on your machine to confirm every URL returns HTTP 200.
const CDN = "https://shop.niu.com/cdn/shop";
const w = (path, v) => `${CDN}/${path}?v=${v}&width=800`;

export const IMAGES = {
  "kqi-air": { src: w("files/KQi_Air_58a24e91-9d34-4154-8ce1-3eb8c14ed3af.png", "1776064749"), alt: "NIU KQi Air carbon fiber electric scooter", source: "collections/electric-scooter" },
  "kqi1-pro": { src: w("files/KQi_90E-3.jpg", "1776064523"), alt: "NIU KQi1 Pro electric scooter", source: "collections/electric-scooter" },
  "bqi-c3-pro": { src: w("files/C3-Grey.png", "1773040840"), alt: "NIU BQi-C3 Pro electric bike", source: "collections/ebike" },
  "all-scooters": { src: w("files/KQi_90E-4.jpg", "1770874475"), alt: "NIU electric kick scooters", source: "cart collection thumbnail" },
  "electric-bikes": { src: w("products/T3-1500_3_d8cafd66-90a5-4a4a-b09d-8f392fcc324d.jpg", "1766985681"), alt: "NIU electric bikes", source: "cart collection thumbnail" },
  "accessories": { src: w("products/KQi3Charger.jpg", "1764826073"), alt: "NIU scooter accessories and spare parts", source: "collections/electric-scooter (Accessories row)" },
  // No image found on NIU's live store for these (products not listed there): kqi3-max, kqi3-pro, kqi2-pro
};

export const imageFor = (key) => IMAGES[key] || null;
