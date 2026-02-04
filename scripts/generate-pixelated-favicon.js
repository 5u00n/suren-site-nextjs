/**
 * Generates a pixelated favicon from public/images/suren.jpg
 * Run: node scripts/generate-pixelated-favicon.js
 */

const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const toIco = require("to-ico");

const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "public", "images", "suren.jpg");
const OUT_ICO = path.join(ROOT, "app", "favicon.ico");
const OUT_PNG = path.join(ROOT, "app", "icon.png");

const PIXEL_SIZE = 10; // downscale to this for strong pixelation
const FINAL_SIZE = 32;

async function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error("Source image not found:", SOURCE);
    process.exit(1);
  }

  // 1) Center-crop to square (face), then pixelate: downscale to PIXEL_SIZE then upscale with nearest
  const pixelatedSquare = await sharp(SOURCE)
    .resize(400, 400, { fit: "cover", position: "center" })
    .resize(PIXEL_SIZE, PIXEL_SIZE, { kernel: sharp.kernel.nearest })
    .resize(FINAL_SIZE, FINAL_SIZE, { kernel: sharp.kernel.nearest })
    .png()
    .toBuffer();

  // 2) Circular mask (SVG) and apply to get circle crop
  const circleMaskSvg = (size) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
</svg>`;
  const mask32 = await sharp(Buffer.from(circleMaskSvg(FINAL_SIZE))).png().toBuffer();
  const pixelatedBuffer = await sharp(pixelatedSquare)
    .composite([{ input: mask32, blend: "dest-in" }])
    .png()
    .toBuffer();

  // 3) Also produce 16x16 circle for multi-size favicon (from same square source)
  const smallSquare = await sharp(pixelatedSquare)
    .resize(16, 16, { kernel: sharp.kernel.nearest })
    .png()
    .toBuffer();
  const mask16 = await sharp(Buffer.from(circleMaskSvg(16))).png().toBuffer();
  const smallBuffer = await sharp(smallSquare)
    .composite([{ input: mask16, blend: "dest-in" }])
    .png()
    .toBuffer();

  // 3) Write ICO (16 and 32) for broad compatibility — to-ico expects array of PNG buffers
  const ico = await toIco([smallBuffer, pixelatedBuffer]);
  fs.writeFileSync(OUT_ICO, ico);
  console.log("Wrote:", OUT_ICO);

  // 4) Write PNG for Next.js app icon (optional, used by some browsers)
  fs.writeFileSync(OUT_PNG, pixelatedBuffer);
  console.log("Wrote:", OUT_PNG);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
