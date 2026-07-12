// One-off helper: turn src/data/profile.json into one CSV per Sheet tab,
// so the Google Sheet can be populated via File > Import. Not part of the
// build. Run with: node scripts/generate-csv.js
//
// Multi-value fields (skills.items, experience.highlights, projects.stack)
// are written as one item per line inside a single quoted cell — exactly
// what fetch-sheet-data.js expects to split back on newlines.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(
  readFileSync(resolve(__dirname, "../src/data/profile.json"), "utf8")
);
const OUT_DIR = resolve(__dirname, "../sheet-import");
mkdirSync(OUT_DIR, { recursive: true });

// Quote a cell if it contains a comma, quote or newline; double inner quotes.
function cell(value) {
  const s = String(value ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function toCsv(rows) {
  return rows.map((row) => row.map(cell).join(",")).join("\n") + "\n";
}

function write(name, rows) {
  writeFileSync(resolve(OUT_DIR, `${name}.csv`), toCsv(rows));
  console.log(`wrote sheet-import/${name}.csv`);
}

const nl = (arr) => (arr ?? []).join("\n");

// Profile: key/value pairs, one field per row.
write("Profile", [
  ["key", "value"],
  ...Object.entries(data.profile),
]);

write("Skills", [
  ["category", "items"],
  ...data.skills.map((s) => [s.category, nl(s.items)]),
]);

write("Experience", [
  ["role", "company", "location", "mode", "startDate", "endDate", "highlights"],
  ...data.experience.map((e) => [
    e.role,
    e.company,
    e.location,
    e.mode,
    e.startDate,
    e.endDate,
    nl(e.highlights),
  ]),
]);

write("Projects", [
  ["name", "stack", "description", "url", "repo"],
  ...data.projects.map((p) => [
    p.name,
    nl(p.stack),
    p.description,
    p.url,
    p.repo,
  ]),
]);

write("Education", [
  ["degree", "institution", "location", "startDate", "endDate"],
  ...data.education.map((e) => [
    e.degree,
    e.institution,
    e.location,
    e.startDate,
    e.endDate,
  ]),
]);

write("Certifications", [
  ["name", "issuer", "url"],
  ...data.certifications.map((c) => [c.name, c.issuer, c.url]),
]);

write("Languages", [
  ["language", "level"],
  ...data.languages.map((l) => [l.language, l.level]),
]);
