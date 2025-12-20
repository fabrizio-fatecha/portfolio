import { Box, Container } from '@mui/material';
import { HeroCard } from './HeroCard';
import { AboutCard } from './AboutCard';
import { ExperienceCards } from './ExperienceCards';
import { SkillsGrid } from './SkillsGrid';
import { ProjectsGrid } from './ProjectsGrid';
import { ContactCard } from './ContactCard';

export function MainContent() {
  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'auto',
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <HeroCard />
        <AboutCard />
        <ExperienceCards />
        <SkillsGrid />
        <ProjectsGrid />
        <ContactCard />
      </Container>
    </Box>
  );
}
