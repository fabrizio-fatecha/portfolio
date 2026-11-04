import { useLang } from '../i18n'

export default function Section({ id, label, children }) {
  const { t } = useLang()
  return (
    <section id={id}>
      <div className="wrap">
        <div className="section-inner">
          <div className="section-row">
            <div className="section-label label">{t(label)}</div>
            <div className="section-content">{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
