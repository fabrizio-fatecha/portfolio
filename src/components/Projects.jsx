import Section from './Section'
import { projects } from '../data/projects'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

export default function Projects() {
  const { t } = useLang()
  return (
    <Section id="projects" label={ui.sections.projects}>
      {projects.map((p, i) => (
        <article className="project" key={i}>
          <div className="project-meta label"><span>{t(p.kind)}</span><span>{p.stack}</span></div>
          <h3 className="display h-project">{t(p.title)}</h3>
          <p>{t(p.summary)}</p>
          {p.link && (
            <a
              className="project-link"
              href={p.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(p.link.label)} <span aria-hidden="true">↗</span>
            </a>
          )}
        </article>
      ))}
    </Section>
  )
}
