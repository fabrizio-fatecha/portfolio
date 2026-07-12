import { useReveal } from "../hooks/useReveal.js";
import SkillIcon from "../lib/skillIcons.jsx";
import "../styles/skills.css";

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
          <div className="skills-card" key={group.category}>
            <div className="skills-card-head">
              <span className="skills-icon">
                <SkillIcon category={group.category} />
              </span>
              <h3 className="skills-category">{group.category}</h3>
            </div>
            <ul className="skills-items">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
