import { profile } from '../data/profile'
import { ui } from '../data/ui'
import { useLang } from '../i18n'

// Decorative API response; intentionally not translated.
const lines = [
  ['ok', '200 OK · cache: HIT'],
  ['', '{'],
  ['key', '  "data": [ … ],'],
  ['key', '  "next": "eyJpZCI6NDIx",'],
  ['key', '  "source": "redis"'],
  ['', '}'],
]

function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-head">GET /v1/records?limit=50</div>
      <pre className="code-body">
        {lines.map(([cls, text], i) => <div key={i} className={cls}>{text}</div>)}
      </pre>
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-row">
          <div className="hero-left">
            <p className="label">{t(profile.kicker)}</p>
            <h1 className="display hero-title">{t(profile.headline)}</h1>
            <p className="hero-intro">{t(profile.intro)}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#projects">{t(ui.hero.viewProjects)}</a>
              <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
                {t(ui.hero.getInTouch)}
              </a>
            </div>
          </div>
          <div className="hero-right"><CodeCard /></div>
        </div>
        <ul className="chips">
          {profile.stack.map((s) => <li key={s} className="chip">{s}</li>)}
        </ul>
      </div>
    </section>
  )
}
