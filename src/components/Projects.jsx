import { useReveal } from "../hooks/useReveal.js";
import Expandable from "./Expandable.jsx";
import "../styles/projects.css";

const PREVIEW_COUNT = 3;

function ProjectCard({ project }) {
  return (
    <article className="proj-item">
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
  );
}

export default function Projects({ projects }) {
  const reveal = useReveal();
  if (!projects?.length) return null;

  const hasMore = projects.length > PREVIEW_COUNT;
  const preview = projects.slice(0, PREVIEW_COUNT);
  const extra = projects.slice(PREVIEW_COUNT);

  return (
    <section
      className={`section ${reveal.className}`}
      id="projects"
      ref={reveal.ref}
    >
      <h2 className="section-title">Projects</h2>
      <div className="proj-list">
        {preview.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
      {hasMore && (
        <Expandable count={extra.length} moreLabel="projects">
          <div className="proj-list">
            {extra.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
        </Expandable>
      )}
    </section>
  );
}
