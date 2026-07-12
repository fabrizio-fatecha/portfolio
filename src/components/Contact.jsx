import { MailIcon, LinkedInIcon, GitHubIcon } from "../lib/contactIcons.jsx";
import "../styles/contact.css";

export default function Contact({ profile }) {
  return (
    <footer className="contact" id="contact">
      <div className="container contact-inner">
        <h2 className="contact-title">Get in touch</h2>
        <div className="contact-links">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="contact-link">
              <MailIcon />
              <span>{profile.email}</span>
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
