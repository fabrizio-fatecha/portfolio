import Section from './Section'
import { certifications } from '../data/certifications'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

export default function Certifications() {
  const { t } = useLang()
  return (
    <Section
      id="certifications"
      label={ui.sections.certifications}
      title={ui.sectionTitles.certifications}
    >
      {certifications.map((c, i) => (
        <div className="cert" key={i}>
          <span className="cert-area label">{t(c.area)}</span>
          <span className="cert-title">{t(c.title)}</span>
          <span className="cert-issuer">{c.issuer}</span>
        </div>
      ))}
    </Section>
  )
}
