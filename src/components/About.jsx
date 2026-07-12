import { useReveal } from "../hooks/useReveal.js";
import "../styles/about.css";

export default function About({ summary }) {
  const reveal = useReveal();
  if (!summary) return null;
  return (
    <section
      className={`section ${reveal.className}`}
      id="about"
      ref={reveal.ref}
    >
      <h2 className="section-title">About</h2>
      <p className="about-summary">{summary}</p>
    </section>
  );
}
