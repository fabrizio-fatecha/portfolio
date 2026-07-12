import { useReveal } from "../hooks/useReveal.js";
import { useToggle } from "../hooks/useToggle.js";
import SkillIcon from "../lib/skillIcons.jsx";
import ChevronIcon from "../lib/ChevronIcon.jsx";
import "../styles/accordion.css";
import "../styles/skills.css";

function SkillCard({ group }) {
  const [expanded, toggle] = useToggle(false);
  return (
    <div className="skills-card">
      <button
        type="button"
        className="accordion-trigger skills-card-head"
        onClick={toggle}
        aria-expanded={expanded}
      >
        <span className="skills-card-head-label">
          <span className="skills-icon">
            <SkillIcon category={group.category} />
          </span>
          <h3 className="skills-category">{group.category}</h3>
        </span>
        <ChevronIcon expanded={expanded} />
      </button>
      <div className={`expandable${expanded ? " expanded" : ""}`}>
        <div className="expandable-inner">
          <ul className="skills-items">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  const reveal = useReveal();
  if (!skills?.length) return null;
  return (
    <section
      className={`section ${reveal.className}`}
      id="skills"
      ref={reveal.ref}
    >
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <SkillCard group={group} key={group.category} />
        ))}
      </div>
    </section>
  );
}
