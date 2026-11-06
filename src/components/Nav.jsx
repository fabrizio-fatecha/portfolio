import { useLang } from '../i18n'
import { ui } from '../data/ui'
import LangSwitch from './LangSwitch'

export default function Nav() {
  const { t } = useLang()
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label={t(ui.nav.label)}>
        <a className="nav-name" href="#top">Fabrizio Fatecha</a>
        <div className="nav-right">
          <ul>
            {ui.nav.links.map((l) => (
              <li key={l.href} className={l.accent ? 'nav-accent' : undefined}>
                <a href={l.href}>{t(l.text)}</a>
              </li>
            ))}
          </ul>
          <LangSwitch />
        </div>
      </nav>
    </header>
  )
}
