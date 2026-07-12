import "../styles/contact.css";

export default function Contact({ profile }) {
  return (
    <footer className="contact" id="contact">
      <div className="container contact-inner">
        <h2 className="contact-title">Get in touch</h2>
        <div className="contact-links">
          {profile.email && (
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
