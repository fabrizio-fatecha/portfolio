import "../styles/skills.css";

export default function Skills({ skills }) {
  if (!skills?.length) return null;
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.category}>
            <h3 className="skills-category">{group.category}</h3>
            <ul className="skills-tags">
              {group.items.map((item) => (
                <li className="skills-tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
