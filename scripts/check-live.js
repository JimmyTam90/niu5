// Run locally (needs network, Node 18+): reports HTTP status for every affiliate URL and image URL. Changes nothing.
const fs = require("fs");
const data = require("../lib/affiliate-links.json");
const imgs = [...fs.readFileSync(__dirname + "/../lib/images.js", "utf8").matchAll(/w\("([^"]+)", "(\d+)"\)/g)]
  .map((m) => `https://shop.niu.com/cdn/shop/${m[1]}?v=${m[2]}&width=800`);
const urls = [data.defaultUrl, ...Object.values(data.products), ...imgs];
(async () => {
  for (const u of urls) {
    try { const r = await fetch(u, { redirect: "follow" }); console.log(r.status, u); }
    catch (e) { console.log("ERR", u, e.message); }
  }
})();
