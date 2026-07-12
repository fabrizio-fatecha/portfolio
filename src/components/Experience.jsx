import "../styles/experience.css";

export default function Experience({ experience }) {
  if (!experience?.length) return null;
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {experience.map((job) => (
          <article className="exp-item" key={`${job.company}-${job.startDate}`}>
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
              {job.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
