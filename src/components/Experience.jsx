import Section from './Section'
import { experience } from '../data/experience'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

export default function Experience() {
  const { t } = useLang()
  return (
    <Section id="experience" label={ui.sections.experience}>
      {experience.map((j, i) => (
        <div className="row" key={i}>
          <div className="row-key label">{t(j.period)}</div>
          <div className="row-val">
            <h3 className="job-role">{t(j.role)}</h3>
            <p className="label job-company">{t(j.company)}</p>
            <ul className="bullets">
              {j.bullets.map((b, k) => <li key={k}>{t(b)}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </Section>
  )
}
