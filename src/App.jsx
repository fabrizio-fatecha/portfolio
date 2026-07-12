import { useEffect, useState } from "react";
import { fetchProfile } from "./lib/fetchProfile.js";
import fallback from "./data/profile.json";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Languages from "./components/Languages.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetchProfile()
      .then((data) => active && setProfile(data))
      .catch((err) => {
        if (!active) return;
        console.error("[portfolio] live fetch failed, using cached data:", err);
        setProfile(fallback);
        setFailed(true);
      });
    return () => {
      active = false;
    };
  }, []);

  if (!profile) {
    return <div className="app-loading">Loading…</div>;
  }

  return (
    <div className="app">
      {failed && (
        <p className="app-banner">
          Live data unavailable — showing the last saved version.
        </p>
      )}
      <Header profile={profile.profile} />
      <main className="container">
        <About summary={profile.profile.summary} />
        <Skills skills={profile.skills} />
        <Experience experience={profile.experience} />
        <Projects projects={profile.projects} />
        <Education education={profile.education} />
        <Certifications certifications={profile.certifications} />
        <Languages languages={profile.languages} />
      </main>
      <Contact profile={profile.profile} />
    </div>
  );
}
