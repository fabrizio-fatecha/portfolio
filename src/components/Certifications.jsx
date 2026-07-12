import "../styles/certifications.css";

export default function Certifications({ certifications }) {
  if (!certifications?.length) return null;
  return (
    <section className="section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <ul className="cert-list">
        {certifications.map((cert) => (
          <li className="cert-item" key={cert.name}>
            <span className="cert-name">{cert.name}</span>
            {cert.issuer && <span className="cert-issuer">{cert.issuer}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
