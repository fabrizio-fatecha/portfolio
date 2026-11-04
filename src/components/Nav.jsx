import { LANGS, useLang } from '../i18n'
import { ui } from '../data/ui'

export default function Nav() {
  const { lang, setLang, t } = useLang()
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label={t(ui.nav.label)}>
        <a className="nav-name" href="#top">Fabrizio Fatecha</a>
        <div className="nav-right">
          <ul>
            {ui.nav.links.map((l) => (
              <li key={l.href}><a href={l.href}>{t(l.text)}</a></li>
            ))}
          </ul>
          <div className="lang" role="group" aria-label={t(ui.nav.language)}>
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
