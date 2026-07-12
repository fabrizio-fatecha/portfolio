import { useState } from "react";
import "../styles/expandable.css";

// Wraps extra content (already rendered by the caller, e.g. a <ul> or a
// grid of cards) in an animated collapse plus a toggle button. Keeps long
// lists (bullet points, certifications, projects) from flooding the page.
export default function Expandable({ count, moreLabel = "more", children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={`expandable${expanded ? " expanded" : ""}`}>
        <div className="expandable-inner">{children}</div>
      </div>
      <button
        type="button"
        className={`show-more-btn${expanded ? " is-expanded" : ""}`}
        onClick={() => setExpanded((e) => !e)}
      >
        {expanded ? "Show less" : `Show ${count} ${moreLabel}`}
      </button>
    </>
  );
}
