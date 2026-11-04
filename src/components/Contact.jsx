import Section from './Section'
import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

export default function Contact() {
  const { t } = useLang()
  return (
    <Section id="contact" label={ui.sections.contact}>
      <h2 className="display contact-title">{t(ui.contact.title)}</h2>
      <a className="contact-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
      <div className="footer">
        <nav>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </Section>
  )
}
