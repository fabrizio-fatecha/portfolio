import { useReveal } from "../hooks/useReveal.js";
import Expandable from "./Expandable.jsx";
import "../styles/certifications.css";

const PREVIEW_COUNT = 5;

function CertItem({ cert }) {
  return (
    <li className="cert-item">
      <span className="cert-name">{cert.name}</span>
      {cert.issuer && <span className="cert-issuer">{cert.issuer}</span>}
    </li>
  );
}

export default function Certifications({ certifications }) {
  const reveal = useReveal();
  if (!certifications?.length) return null;

  const hasMore = certifications.length > PREVIEW_COUNT;
  const preview = certifications.slice(0, PREVIEW_COUNT);
  const extra = certifications.slice(PREVIEW_COUNT);

  return (
    <section
      className={`section ${reveal.className}`}
      id="certifications"
      ref={reveal.ref}
    >
      <h2 className="section-title">Certifications</h2>
      <ul className="cert-list">
        {preview.map((cert) => (
          <CertItem cert={cert} key={cert.name} />
        ))}
      </ul>
      {hasMore && (
        <Expandable count={extra.length} moreLabel="more">
          <ul className="cert-list">
            {extra.map((cert) => (
              <CertItem cert={cert} key={cert.name} />
            ))}
          </ul>
        </Expandable>
      )}
    </section>
  );
}
