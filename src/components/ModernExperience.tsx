import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const ModernExperience: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="experience" className="py-10 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">{content.experience.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {content.experience.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-emerald-500 to-transparent hidden md:block" />

          <div className="space-y-12">
            {content.experience.jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-background hidden md:block transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>

                <div className="md:ml-20 p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-green-400" />
                        <h3 className="text-white">{job.position}</h3>
                      </div>
                      <h4 className="text-green-400 mb-3">{job.company}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-6">
                    {job.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-white/60">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
