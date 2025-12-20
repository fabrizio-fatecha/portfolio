import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';
import { Terminal } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export function Navigation() {
  const { content } = useLanguage();

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#fff8f0', boxShadow: '0 2px 12px rgba(230,164,180,0.15)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Terminal sx={{ color: '#e6a4b4', fontSize: 28 }} />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button sx={{ color: '#4a4a4a', '&:hover': { bgcolor: 'rgba(230,164,180,0.1)' } }} href="#about">{content.nav.about}</Button>
            <Button sx={{ color: '#4a4a4a', '&:hover': { bgcolor: 'rgba(230,164,180,0.1)' } }} href="#experience">{content.nav.experience}</Button>
            <Button sx={{ color: '#4a4a4a', '&:hover': { bgcolor: 'rgba(230,164,180,0.1)' } }} href="#skills">{content.nav.skills}</Button>
            <Button sx={{ color: '#4a4a4a', '&:hover': { bgcolor: 'rgba(230,164,180,0.1)' } }} href="#projects">{content.nav.projects}</Button>
            <Button sx={{ color: '#4a4a4a', '&:hover': { bgcolor: 'rgba(230,164,180,0.1)' } }} href="#contact">{content.nav.contact}</Button>
          </Box>
          <LanguageToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}