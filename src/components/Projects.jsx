import "../styles/projects.css";

export default function Projects({ projects }) {
  if (!projects?.length) return null;
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="proj-list">
        {projects.map((project) => (
          <article className="proj-item" key={project.name}>
            <div className="proj-head">
              <h3 className="proj-name">{project.name}</h3>
              <div className="proj-links">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
            <p className="proj-desc">{project.description}</p>
            {project.stack?.length > 0 && (
              <ul className="proj-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
