import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

export default function Profile() {
  const { t } = useLang()
  return (
    <div className="panel-wrap" id="profile">
      <div className="panel">
        <div className="section-row">
          <div className="section-label label">{t(ui.sections.profile)}</div>
          <div className="section-content">
            <h2 className="display h-section">{t(profile.aboutTitle)}</h2>
            {profile.about.map((p, i) => <p key={i}>{t(p)}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}
