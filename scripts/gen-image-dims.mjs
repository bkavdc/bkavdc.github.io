// One-off build helper: reads the actual pixel dimensions of every image in
// /public so components can size <Image> correctly and preserve each photo's
// real aspect ratio (portrait/landscape/square) instead of hard-cropping.
// Run with `node scripts/gen-image-dims.mjs`, then commit the generated JSON.
import { imageSizeFromFile } from "image-size/fromFile";
import { readdirSync, statSync, writeFileSync } from "fs";
import path from "path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const exts = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function walk(dir, base = "") {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const rel = path.join(base, entry);
    if (statSync(full).isDirectory()) {
      out.push(...walk(full, rel));
    } else if (exts.has(path.extname(entry).toLowerCase())) {
      out.push({ full, url: "/" + rel.split(path.sep).join("/") });
    }
  }
  return out;
}

const files = walk(PUBLIC_DIR);
const dims = {};

for (const f of files) {
  try {
    const { width, height } = await imageSizeFromFile(f.full);
    dims[f.url] = { width, height };
  } catch (e) {
    console.warn("skip", f.url, e.message);
  }
}

writeFileSync(
  path.join(process.cwd(), "lib", "image-dims.json"),
  JSON.stringify(dims, null, 2)
);
console.log(`Wrote dimensions for ${Object.keys(dims).length} images.`);
