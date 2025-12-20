import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ModernNavbar } from './components/ModernNavbar';
import { ModernHero } from './components/ModernHero';
import { ModernAbout } from './components/ModernAbout';
import { ModernExperience } from './components/ModernExperience';
import { ModernSkills } from './components/ModernSkills';
import { ModernProjects } from './components/ModernProjects';
import { ModernContact } from './components/ModernContact';
import { ModernFooter } from './components/ModernFooter';
import { CVExporter } from './components/CVExporter';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <ModernNavbar />
        
        <main>
          <ModernHero />
          <ModernAbout />
          <ModernExperience />
          <ModernSkills />
          <ModernProjects />
          {/* <ModernContact /> */}
        </main>

        <ModernFooter />
        
        <CVExporter />
        
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
      </div>
    </LanguageProvider>
  );
}