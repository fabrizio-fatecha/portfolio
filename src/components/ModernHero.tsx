import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Character3D } from './Character3D';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export const ModernHero: React.FC = () => {
  const { content } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-background">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 backdrop-blur-sm">
                {content.hero.greeting}
              </span>
              
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="gradient-text mb-4">
                {content.hero.name}
              </h1>
              {/* <h2 className="text-white/80 mb-6">
                {content.hero.title}
              </h2> */}
              <p className="text-lg text-white/60 max-w-xl">
                {content.hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 flex items-center gap-2 glow"
              >
                {content.hero.cta.projects}
                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
              </button>

              {/* <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300"
              >
                {content.hero.cta.contact}
              </button> */}

              {/* <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 flex items-center gap-2">
                <Download className="w-4 h-4" />
                CV
              </button> */}


              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4"
                style={{marginLeft: "20px"}}
              >
                <a
                  href="https://github.com/fabrizio-fatecha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/fabrizio-fatecha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:fatechafabrizio@gmail.com"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <Character3D />


          </motion.div>



        </div>

        {/* Certifications */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-left"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm" style={{ marginTop: "30px" }}>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-white">
              {content.certifications.list[0]}
            </span>
          </div>
        </motion.div>
        
        <div style={{marginTop: "20px"}}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-green-500 rounded-full"
            />
          </motion.div>
        </motion.div>

        </div>


        
      </div>
    </section>
  );
};
