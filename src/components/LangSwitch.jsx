import { LANGS, useLang } from '../i18n'
import { ui } from '../data/ui'

// EN / ES toggle shared by every page. Styling comes from the page's own stylesheet (.lang).
export default function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
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
  )
}
