import { useReveal } from "../hooks/useReveal.js";
import "../styles/languages.css";

export default function Languages({ languages }) {
  const reveal = useReveal();
  if (!languages?.length) return null;
  return (
    <section
      className={`section ${reveal.className}`}
      id="languages"
      ref={reveal.ref}
    >
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
