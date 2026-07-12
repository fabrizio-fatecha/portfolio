// Shared transform: turns raw Google Sheets API values into the profile shape
// the UI renders. Pure functions, no browser/node specifics, so both the
// client fetch (fetchProfile.js) and the optional node script use it.

// Sheet tab names, in the order they map to the batchGet valueRanges.
export const TABS = [
  "Profile",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Certifications",
  "Languages",
];

// Split a multi-value cell entered as one item per line into a clean array.
export function splitLines(cell) {
  if (!cell) return [];
  return cell
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

// Value range (header row + data rows) -> array of objects keyed by header.
export function rowsToObjects(valueRange) {
  const values = valueRange?.values ?? [];
  if (values.length < 2) return [];
  const [header, ...rows] = values;
  return rows.map((row) => {
    const obj = {};
    header.forEach((key, i) => {
      obj[key.trim()] = (row[i] ?? "").trim();
    });
    return obj;
  });
}

// The Profile tab is a key/value list (columns: key, value) -> single object.
export function toProfile(valueRange) {
  const values = valueRange?.values ?? [];
  const [, ...rows] = values; // drop header
  const profile = {};
  rows.forEach(([key, value]) => {
    if (key) profile[key.trim()] = (value ?? "").trim();
  });
  return profile;
}

// Map the ordered valueRanges array back to an object keyed by tab name.
export function valueRangesToByTab(valueRanges) {
  const byTab = {};
  valueRanges.forEach((vr, i) => {
    byTab[TABS[i]] = vr;
  });
  return byTab;
}

export function transform(byTab) {
  return {
    profile: toProfile(byTab.Profile),
    skills: rowsToObjects(byTab.Skills).map((r) => ({
      category: r.category,
      items: splitLines(r.items),
    })),
    experience: rowsToObjects(byTab.Experience).map((r) => ({
      role: r.role,
      company: r.company,
      location: r.location,
      mode: r.mode,
      startDate: r.startDate,
      endDate: r.endDate,
      highlights: splitLines(r.highlights),
    })),
    projects: rowsToObjects(byTab.Projects).map((r) => ({
      name: r.name,
      stack: splitLines(r.stack),
      description: r.description,
      url: r.url,
      repo: r.repo,
    })),
    education: rowsToObjects(byTab.Education),
    certifications: rowsToObjects(byTab.Certifications),
    languages: rowsToObjects(byTab.Languages),
  };
}
