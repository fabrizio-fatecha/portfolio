import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email, Cloud } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { content } = useLanguage();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f7e8e8 0%, #e8dff5 50%, #fce8f3 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(230,164,180,0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
          <Chip
            icon={<Cloud />}
            label="Azure Certified"
            sx={{
              mb: 3,
              bgcolor: '#fff8f0',
              color: '#e6a4b4',
              border: '2px solid #e6a4b4',
              fontSize: '0.9rem',
              fontWeight: 500,
            }}
          />
          <Typography
            variant="h6"
            sx={{ mb: 2, color: '#a8c8e1', letterSpacing: 1 }}
          >
            {content.hero.greeting}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontSize: { xs: '2.8rem', md: '5rem' },
              fontWeight: 600,
              color: '#e6a4b4',
              lineHeight: 1.2,
            }}
          >
            {content.hero.name}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontSize: { xs: '1.3rem', md: '2rem' },
              color: '#6b6b6b',
              fontWeight: 500,
            }}
          >
            {content.hero.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: '700px',
              color: '#4a4a4a',
              lineHeight: 1.8,
              fontSize: '1.1rem',
            }}
          >
            {content.hero.description}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#e6a4b4',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                boxShadow: '0 4px 14px rgba(230,164,180,0.35)',
                '&:hover': {
                  bgcolor: '#d98fa3',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(230,164,180,0.4)',
                },
                transition: 'all 0.3s',
              }}
              href="#projects"
            >
              {content.hero.cta.projects}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#a8c8e1',
                color: '#a8c8e1',
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: '#a8c8e1',
                  borderWidth: '2px',
                  bgcolor: 'rgba(168,200,225,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
              href="#contact"
            >
              {content.hero.cta.contact}
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                color: '#6b6b6b',
                '&:hover': { color: '#e6a4b4', bgcolor: 'rgba(230,164,180,0.1)' },
              }}
              startIcon={<GitHub />}
              href="https://github.com"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              sx={{
                color: '#6b6b6b',
                '&:hover': { color: '#e6a4b4', bgcolor: 'rgba(230,164,180,0.1)' },
              }}
              startIcon={<LinkedIn />}
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              sx={{
                color: '#6b6b6b',
                '&:hover': { color: '#e6a4b4', bgcolor: 'rgba(230,164,180,0.1)' },
              }}
              startIcon={<Email />}
              href="#contact"
            >
              Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}