// Verifies supplied affiliate URLs are valid and still carry ?ref=ghtakjkm. Does NOT rewrite anything.
const data = require("../lib/affiliate-links.json");
const REF = "ghtakjkm";
let bad = 0;
const check = (k, v) => {
  try {
    const u = new URL(v);
    if (u.protocol !== "https:" || u.searchParams.get("ref") !== REF) throw new Error("missing/changed ref");
  } catch (e) {
    console.error(`[check-links] INVALID ${k}: ${v} (${e.message})`);
    bad++;
  }
};
check("defaultUrl", data.defaultUrl);
Object.entries(data.products).forEach(([k, v]) => check(k, v));
if (bad) process.exit(1);
console.log(`[check-links] OK: ${Object.keys(data.products).length + 1} URLs preserved with ref=${REF} (syntax only, not runtime-verified)`);
