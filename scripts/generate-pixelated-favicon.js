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
  const pixelatedBuffer = await sharp(SOURCE)
    .resize(400, 400, { fit: "cover", position: "center" })
    .resize(PIXEL_SIZE, PIXEL_SIZE, { kernel: sharp.kernel.nearest })
    .resize(FINAL_SIZE, FINAL_SIZE, { kernel: sharp.kernel.nearest })
    .png()
    .toBuffer();

  // 2) Also produce 16x16 for multi-size favicon
  const smallBuffer = await sharp(pixelatedBuffer)
    .resize(16, 16, { kernel: sharp.kernel.nearest })
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
