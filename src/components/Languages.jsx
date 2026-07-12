import "../styles/languages.css";

export default function Languages({ languages }) {
  if (!languages?.length) return null;
  return (
    <section className="section" id="languages">
      <h2 className="section-title">Languages</h2>
      <ul className="lang-list">
        {languages.map((lang) => (
          <li className="lang-item" key={lang.language}>
            <span className="lang-name">{lang.language}</span>
            <span className="lang-level">{lang.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
