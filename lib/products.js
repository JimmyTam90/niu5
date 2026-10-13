import { imageFor } from "./images";

// Products without a verified NIU image (image === null) are NOT rendered; nothing is substituted.
const make = (key, name, category, description) => ({
  id: key, affiliateKey: key, name, category, description, image: imageFor(key),
});

export const ALL_PRODUCTS = [
  make("kqi3-max", "NIU KQi3 Max", "Electric kick scooter", "Flagship model of the KQi3 electric kick scooter line for everyday city commuting."),
  make("kqi-air", "NIU KQi Air", "Carbon fiber electric scooter", "Carbon fiber electric scooter designed around a lightweight frame."),
  make("kqi3-pro", "NIU KQi3 Pro", "Electric kick scooter", "Part of the KQi3 line of electric kick scooters for daily rides."),
  make("kqi2-pro", "NIU KQi2 Pro", "Electric kick scooter", "Part of the KQi2 line of electric kick scooters."),
  make("kqi1-pro", "NIU KQi1 Pro", "Electric kick scooter", "Entry model of NIU's electric kick scooter range for short city trips."),
  make("bqi-c3-pro", "NIU BQi-C3 Pro", "Electric bike", "NIU's BQi-C3 Pro city e-bike for longer commutes and weekend rides."),
];

export const PRODUCTS = ALL_PRODUCTS.filter((p) => p.image);
export const HERO_PRODUCTS = ["kqi-air", "kqi1-pro"];

export const CATEGORIES = [
  { id: "all-scooters", affiliateKey: "all-scooters", name: "Electric scooters", description: "Browse NIU's full electric scooter collection.", image: imageFor("all-scooters") },
  { id: "electric-bikes", affiliateKey: "electric-bikes", name: "E-bikes", description: "See NIU's e-bike collection.", image: imageFor("electric-bikes") },
  { id: "accessories", affiliateKey: "accessories", name: "Accessories", description: "Chargers, helmets, and replacement parts, as listed by NIU.", image: imageFor("accessories") },
].filter((c) => c.image);

export const FAQS = [
  { q: "Is this the official NIU store?", a: "No. PrimeGearLab is an independent affiliate publisher. Purchases are completed on NIU's own store (shop.niu.com)." },
  { q: "Where do the buttons take me?", a: "Every shop button opens NIU's store in a new tab, so this page stays open in your browser." },
  { q: "Where can I find prices, shipping, and warranty details?", a: "Pricing, availability, shipping, returns, and warranty terms are set by NIU and can change. Please review them on NIU's product page before buying." },
  { q: "Do you earn money from these links?", a: "We may earn a commission from qualifying purchases at no extra cost to you. See our affiliate disclosure for details." },
];
