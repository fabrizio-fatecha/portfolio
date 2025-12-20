import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code, Cloud, Wrench } from 'lucide-react';

export const ModernAbout: React.FC = () => {
  const { content } = useLanguage();

  const icons = [Code, Cloud, Wrench];

  return (
    <section id="about" className="py-0 relative">

      <div className="container mx-auto px-6 ">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">{content.about.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {content.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              {content.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {content.about.stats.experience}
                </div>
                <div className="text-sm text-white/60">Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400 mb-1">15+</div>
                <div className="text-sm text-white/60">{content.about.stats.technologies}</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400 mb-1">$5M</div>
                <div className="text-sm text-white/60">Project Value</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {content.about.highlights.map((highlight, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white mb-2">{highlight.title}</h4>
                      <p className="text-white/60 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

  
      </div>
    </section>
  );
};
