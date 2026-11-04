import { useLang } from '../i18n'

export default function Section({ id, label, title, children }) {
  const { t } = useLang()
  return (
    <section id={id}>
      <div className="wrap">
        <div className="section-inner">
          <div className="section-row">
            <div className="section-label label">{t(label)}</div>
            <div className="section-content">
              {title && <h2 className="display h-section section-title">{t(title)}</h2>}
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
