import Nav from './components/Nav'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Profile />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
