// Simple monochrome icons per skill category, keyed by keyword match on the
// category name (case-insensitive) so it still works if the Sheet uses
// slightly different category names. Falls back to a generic icon.

const icons = {
  languages: (
    <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />
  ),
  frameworks: (
    <path d="M12 3 3 8l9 5 9-5-9-5ZM3 16l9 5 9-5M3 12l9 5 9-5" />
  ),
  databases: (
    <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  ),
  cloud: (
    <path d="M7 18a4.5 4.5 0 0 1-.5-8.98A6 6 0 0 1 18 8a4 4 0 0 1-1 7.9H7Z" />
  ),
  tools: (
    <path d="m14.7 6.3 3 3-8.4 8.4-3.6.6.6-3.6 8.4-8.4Zm3.6-2.6 2 2-1.6 1.6-2-2 1.6-1.6Z" />
  ),
  default: <path d="M12 5v14M5 12h14" />,
};

function matchIcon(category) {
  const key = category.toLowerCase();
  if (key.includes("lang")) return icons.languages;
  if (key.includes("framework")) return icons.frameworks;
  if (key.includes("database") || key.includes("db")) return icons.databases;
  if (key.includes("cloud") || key.includes("devops")) return icons.cloud;
  if (key.includes("tool")) return icons.tools;
  return icons.default;
}

export default function SkillIcon({ category }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {matchIcon(category)}
    </svg>
  );
}
