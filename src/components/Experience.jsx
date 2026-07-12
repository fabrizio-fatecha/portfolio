import { useReveal } from "../hooks/useReveal.js";
import { useToggle } from "../hooks/useToggle.js";
import ChevronIcon from "../lib/ChevronIcon.jsx";
import "../styles/accordion.css";
import "../styles/experience.css";

function ExperienceEntry({ job }) {
  const [expanded, toggle] = useToggle(false);

  return (
    <article className="exp-item">
      <div className="exp-head">
        <h3 className="exp-role">{job.role}</h3>
        <span className="exp-dates">
          {job.startDate} – {job.endDate}
        </span>
      </div>
      <p className="exp-company">
        {job.company}
        {job.location && ` · ${job.location}`}
        {job.mode && ` · ${job.mode}`}
      </p>
      <button
        type="button"
        className="accordion-trigger exp-toggle"
        onClick={toggle}
        aria-expanded={expanded}
      >
        <span>{expanded ? "Hide details" : "Show details"}</span>
        <ChevronIcon expanded={expanded} />
      </button>
      <div className={`expandable${expanded ? " expanded" : ""}`}>
        <div className="expandable-inner">
          <ul className="exp-highlights">
            {job.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Experience({ experience }) {
  const reveal = useReveal();
  if (!experience?.length) return null;
  return (
    <section
      className={`section ${reveal.className}`}
      id="experience"
      ref={reveal.ref}
    >
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {experience.map((job) => (
          <ExperienceEntry job={job} key={`${job.company}-${job.startDate}`} />
        ))}
      </div>
    </section>
  );
}
