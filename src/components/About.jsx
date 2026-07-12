import "../styles/about.css";

export default function About({ summary }) {
  if (!summary) return null;
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <p className="about-summary">{summary}</p>
    </section>
  );
}
