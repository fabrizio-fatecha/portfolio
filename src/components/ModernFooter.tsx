import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const ModernFooter: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text mb-4">Portfolio</h3>
            <p className="text-white/60 text-sm">
              {content.footer.text}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['about', 'experience', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-white/60 hover:text-green-400 text-sm transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/fabrizio-fatecha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-green-500/50"
              >
                <Github className="w-5 h-5 text-white/60 hover:text-green-400" />
              </a>
              <a
                href="https://linkedin.com/in/fabrizio-fatecha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-green-500/50"
              >
                <Linkedin className="w-5 h-5 text-white/60 hover:text-green-400" />
              </a>
              <a
                href="mailto:fatechafabrizio@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-green-500/50"
              >
                <Mail className="w-5 h-5 text-white/60 hover:text-green-400" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2025 {content.footer.rights}
            </p>
  
          </div>
            <p className="text-white/40 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
            </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
    </footer>
  );
};
