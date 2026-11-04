import Section from './Section'
import { projects, webProjects } from '../data/projects'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

function ExtLink({ link }) {
  const { t } = useLang()
  return (
    <a className="project-link" href={link.url} target="_blank" rel="noopener noreferrer">
      {t(link.label)} <span aria-hidden="true">↗</span>
    </a>
  )
}

export default function Projects() {
  const { t } = useLang()
  return (
    <Section id="projects" label={ui.sections.projects}>
      {projects.map((p, i) => (
        <article className="project" key={i}>
          <div className="project-meta label"><span>{t(p.kind)}</span><span>{p.stack}</span></div>
          <h3 className="display h-project">{t(p.title)}</h3>
          <p>{t(p.summary)}</p>
          {p.link && <ExtLink link={p.link} />}
        </article>
      ))}

      <div className="more">
        <h3 className="label more-heading">{t(ui.projects.more)}</h3>
        <div>
          {webProjects.map((p, i) => (
            <article className="row" key={i}>
              <div className="row-key label">{t(p.kind)}</div>
              <div className="row-val">
                <h4 className="mini-title">{t(p.title)}</h4>
                <p className="label mini-meta">{p.stack}</p>
                <p className="mini-summary">{t(p.summary)}</p>
                {p.link && <ExtLink link={p.link} />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
