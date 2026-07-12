// Optional helper: refresh the cached fallback at src/data/profile.json from
// the live sheet, using the same service account as the Netlify function.
// The app fetches live in the browser on every load via that function, so
// this is NOT part of the build — it just updates the offline fallback that
// ships in the bundle. Run with:
//   node --env-file=.env scripts/fetch-sheet-data.js
//
// Reads SHEET_ID and GOOGLE_SERVICE_ACCOUNT_JSON. If they are missing, it
// keeps the existing profile.json and exits without failing.

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getAccessToken } from "../src/lib/googleAuth.js";
import { TABS, transform, valueRangesToByTab } from "../src/lib/transform.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = resolve(__dirname, "../src/data/profile.json");

const SHEET_ID = process.env.SHEET_ID;
const rawCredentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

if (!SHEET_ID || !rawCredentials) {
  if (existsSync(OUT_FILE)) {
    console.warn(
      "[fetch-sheet-data] SHEET_ID / GOOGLE_SERVICE_ACCOUNT_JSON not set — keeping existing profile.json."
    );
    process.exit(0);
  }
  console.error("[fetch-sheet-data] Missing env vars and no profile.json.");
  process.exit(1);
}

async function main() {
  const credentials = JSON.parse(rawCredentials);
  const accessToken = await getAccessToken(credentials);

  const params = new URLSearchParams();
  TABS.forEach((tab) => params.append("ranges", tab));
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?${params}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) {
    throw new Error(`Sheets API responded ${res.status}: ${await res.text()}`);
  }

  const data = await res.json();
  const profile = transform(valueRangesToByTab(data.valueRanges ?? []));

  mkdirSync(dirname(OUT_FILE), { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify(profile, null, 2) + "\n");
  console.log(`[fetch-sheet-data] Wrote ${OUT_FILE}`);
}

main().catch((err) => {
  console.error("[fetch-sheet-data]", err.message);
  process.exit(1);
});
