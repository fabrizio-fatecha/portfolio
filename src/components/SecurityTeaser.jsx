import { ui } from '../data/ui'
import { useLang } from '../i18n'

// Dark panel on the main page that points to the separate /pentesting/ page.
export default function SecurityTeaser() {
  const { t } = useLang()
  return (
    <div className="panel-wrap sec-wrap" id="security">
      <div className="panel sec-panel">
        <div className="section-row">
          <div className="section-label label">{t(ui.sections.security)}</div>
          <div className="section-content">
            <p className="sec-prompt" aria-hidden="true">{ui.security.prompt}</p>
            <h2 className="display h-section">{t(ui.security.title)}</h2>
            <p>{t(ui.security.text)}</p>
            <a className="sec-btn" href="/pentesting/">{t(ui.security.cta)} →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
