// Small rotating chevron used on every accordion trigger (Skills,
// Experience, Projects, Certifications) to indicate expand/collapse state.
export default function ChevronIcon({ expanded }) {
  return (
    <svg
      className="chevron-icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
      }}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
