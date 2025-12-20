import { Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { jsPDF } from 'jspdf';

export const CVExporter = () => {
  const { content, language } = useLanguage();

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;
    let yPos = 20;
    const lineHeight = 7;

    // Helper function to add text with word wrap
    const addText = (text: string, size: number, style: 'normal' | 'bold' = 'normal', color: [number, number, number] = [0, 0, 0]) => {
      doc.setFontSize(size);
      doc.setFont('helvetica', style);
      doc.setTextColor(color[0], color[1], color[2]);
      const lines = doc.splitTextToSize(text, contentWidth);
      lines.forEach((line: string) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(line, margin, yPos);
        yPos += lineHeight;
      });
    };

    const addSpace = (space: number = 5) => {
      yPos += space;
    };

    const addLine = () => {
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 5;
    };

    // HEADER
    addText('FULLSTACK DEVELOPER', 20, 'bold'); 
    addText('Azure Certified | Odoo Developer | Backend Specialist', 12, 'normal', [60, 60, 60]);
    addSpace(3);
    addText(language === 'es' ? 'Paraguay | Disponible para Freelance' : 'Paraguay | Available for Freelance', 10, 'normal', [80, 80, 80]);
    addText('fatechafabrizio@gmail.com', 10, 'normal', [80, 80, 80]);
    addText('+595981530531', 10, 'normal', [80, 80, 80]);
    addSpace(1);
    addLine();

    // PROFESSIONAL SUMMARY
    addText(language === 'es' ? 'RESUMEN PROFESIONAL' : 'PROFESSIONAL SUMMARY', 14, 'bold');
    addSpace(3);
    addText(content.about.description, 10);
    addSpace(8);
    addLine();

    // CERTIFICATIONS
    addText(language === 'es' ? 'CERTIFICACIONES' : 'CERTIFICATIONS', 14, 'bold');
    addSpace(3);
    content.certifications.list.forEach((cert: string) => {
      addText(`• ${cert}`, 10);
    });
    addSpace(8);
    addLine();

    // PROFESSIONAL EXPERIENCE
    addText(language === 'es' ? 'EXPERIENCIA PROFESIONAL' : 'PROFESSIONAL EXPERIENCE', 14, 'bold');
    addSpace(5);

    content.experience.jobs.forEach((job: any, index: number) => {
      // Company and Position
      addText(`${job.position}`, 12, 'bold');
      addText(`${job.company} | ${job.location}`, 10, 'normal', [60, 60, 60]);
      addText(job.period, 10, 'normal', [80, 80, 80]);
      addSpace(2);
      
      // Description
      addText(job.description, 10);
      addSpace(2);

      // Achievements
      addText(language === 'es' ? 'Logros principales:' : 'Key Achievements:', 10, 'bold');
      job.achievements.forEach((achievement: string) => {
        addText(`• ${achievement}`, 10);
      });
      addSpace(2);

      // Technologies
      const techString = `${language === 'es' ? 'Tecnologías:' : 'Technologies:'} ${job.technologies.join(', ')}`;
      addText(techString, 9, 'normal', [80, 80, 80]);
      
      if (index < content.experience.jobs.length - 1) {
        addSpace(7);
      }
    });

    addSpace(1);
    addLine();

    // TECHNICAL SKILLS
    addText(language === 'es' ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS', 14, 'bold');
    addSpace(5);

    content.skills.categories.forEach((category: any) => {
      addText(category.name, 11, 'bold');
      addSpace(2);
      const skills = category.skills.map((skill: any) => skill.name).join(', ');
      addText(skills, 10);
      addSpace(4);
    });

    addSpace(5);
    addLine();

    // NOTABLE PROJECTS
    addText(language === 'es' ? 'PROYECTOS DESTACADOS' : 'NOTABLE PROJECTS', 14, 'bold');
    addSpace(5);

    content.projects.list.forEach((project: any, index: number) => {
      addText(project.title, 12, 'bold');
      addText(`${project.company} | ${project.impact}`, 10, 'normal', [60, 60, 60]);
      addSpace(2);
      addText(project.description, 10);
      addSpace(2);

      // Project highlights
      project.highlights.forEach((highlight: string) => {
        addText(`• ${highlight}`, 10);
      });
      addSpace(2);

      // Technologies
      const techString = `${language === 'es' ? 'Stack:' : 'Stack:'} ${project.technologies.join(', ')}`;
      addText(techString, 9, 'normal', [80, 80, 80]);
      
      if (index < content.projects.list.length - 1) {
        addSpace(6);
      }
    });

    // Save the PDF
    const fileName = language === 'es' 
      ? 'CV_Desarrollador_Fullstack.pdf' 
      : 'CV_Fullstack_Developer.pdf';
    doc.save(fileName);
  };

  return (
    <button
      onClick={generatePDF}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline">
        {language === 'es' ? 'Descargar CV (ATS)' : 'Download CV (ATS)'}
      </span>
      <span className="sm:hidden">CV</span>
    </button>
  );
};
