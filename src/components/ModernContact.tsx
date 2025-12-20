import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export const ModernContact: React.FC = () => {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(content.contact.success);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">{content.contact.title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {content.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white mb-4">{content.contact.description}</h3>
              <p className="text-white/60">
                {content.contact.description}
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">Email</div>
                  <div className="text-white">{content.contact.info.email}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">Location</div>
                  <div className="text-white">{content.contact.info.location}</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm text-white/60 mb-1">Status</div>
                  <div className="text-white">{content.contact.info.availability}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 text-sm">
                  {content.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500/20 backdrop-blur-sm transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">
                  {content.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500/20 backdrop-blur-sm transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">
                  {content.contact.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500/20 backdrop-blur-sm transition-all"
                  placeholder={content.contact.form.subject}
                />
              </div>

              <div>
                <label className="block text-white mb-2 text-sm">
                  {content.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500/20 backdrop-blur-sm transition-all resize-none"
                  placeholder={content.contact.form.message}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 glow"
              >
                <Send className="w-4 h-4" />
                {content.contact.form.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
