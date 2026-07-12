import { useReveal } from "../hooks/useReveal.js";
import "../styles/education.css";

export default function Education({ education }) {
  const reveal = useReveal();
  if (!education?.length) return null;
  return (
    <section
      className={`section ${reveal.className}`}
      id="education"
      ref={reveal.ref}
    >
      <h2 className="section-title">Education</h2>
      <div className="edu-list">
        {education.map((item) => (
          <article className="edu-item" key={item.degree}>
            <div className="edu-head">
              <h3 className="edu-degree">{item.degree}</h3>
              <span className="edu-dates">
                {item.startDate} – {item.endDate}
              </span>
            </div>
            <p className="edu-meta">
              {item.institution}
              {item.location && ` · ${item.location}`}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
