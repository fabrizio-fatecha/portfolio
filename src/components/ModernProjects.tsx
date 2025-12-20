import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Building2 } from 'lucide-react';

export const ModernProjects: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">{content.projects.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {content.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Impact Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 backdrop-blur-md">
                  {project.impact}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-white mb-2 group-hover:text-green-400 transition-colors">
                          <a href={project.link}>{project.title}</a>
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Building2 className="w-4 h-4" />
                      {project.company}
                    </div>
                  </div>
                  
                  {/* <button className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-110">
                    <ExternalLink className="w-4 h-4 text-green-400" />
                  </button> */}
                </div>

                <p className="text-white/70 mb-6 text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-xs text-white/60">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60"
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
    </section>
  );
};
