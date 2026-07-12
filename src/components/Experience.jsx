import { useReveal } from "../hooks/useReveal.js";
import Expandable from "./Expandable.jsx";
import "../styles/experience.css";

const PREVIEW_COUNT = 4;

function ExperienceEntry({ job }) {
  const hasMore = job.highlights.length > PREVIEW_COUNT;
  const preview = job.highlights.slice(0, PREVIEW_COUNT);
  const extra = job.highlights.slice(PREVIEW_COUNT);

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
      <ul className="exp-highlights">
        {preview.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      {hasMore && (
        <Expandable count={extra.length} moreLabel="points">
          <ul className="exp-highlights">
            {extra.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Expandable>
      )}
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
