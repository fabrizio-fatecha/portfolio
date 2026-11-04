import Section from './Section'
import { skills } from '../data/skills'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

export default function Skills() {
  const { t } = useLang()
  return (
    <Section id="skills" label={ui.sections.skills}>
      {skills.map((s, i) => (
        <div className="row" key={i}>
          <div className="row-key label">{t(s.area)}</div>
          <div className="row-val">{t(s.items)}</div>
        </div>
      ))}
    </Section>
  )
}
