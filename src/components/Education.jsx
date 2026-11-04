import Section from './Section'
import { education } from '../data/education'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

export default function Education() {
  const { t } = useLang()
  return (
    <Section id="education" label={ui.sections.education} title={ui.sectionTitles.education}>
      {education.map((e, i) => (
        <div className="row" key={i}>
          <div className="row-key label">{t(e.key)}</div>
          <div className="row-val">{t(e.value)}</div>
        </div>
      ))}
    </Section>
  )
}
