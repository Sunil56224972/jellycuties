import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const siteDir = path.join(root, "site");

if (fs.existsSync(siteDir)) {
  fs.rmSync(siteDir, { recursive: true, force: true });
}
fs.cpSync(distDir, siteDir, { recursive: true });
console.log("Synced dist/ -> site/");
