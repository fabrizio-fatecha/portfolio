import { useReveal } from "../hooks/useReveal.js";
import { useToggle } from "../hooks/useToggle.js";
import ChevronIcon from "../lib/ChevronIcon.jsx";
import EyeIcon from "../lib/EyeIcon.jsx";
import "../styles/accordion.css";
import "../styles/certifications.css";

export default function Certifications({ certifications }) {
  const reveal = useReveal();
  const [expanded, toggle] = useToggle(false);
  if (!certifications?.length) return null;

  return (
    <section
      className={`section ${reveal.className}`}
      id="certifications"
      ref={reveal.ref}
    >
      <h2 className="section-title">Certifications</h2>
      <button
        type="button"
        className="accordion-trigger cert-toggle"
        onClick={toggle}
        aria-expanded={expanded}
      >
        <span>
          {expanded ? "Hide certificates" : `Show ${certifications.length} certificates`}
        </span>
        <ChevronIcon expanded={expanded} />
      </button>
      <div className={`expandable${expanded ? " expanded" : ""}`}>
        <div className="expandable-inner">
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li className="cert-item" key={cert.name}>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-meta">
                  {cert.issuer && <span className="cert-issuer">{cert.issuer}</span>}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="cert-view"
                      aria-label={`View ${cert.name} certificate`}
                    >
                      <EyeIcon />
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
