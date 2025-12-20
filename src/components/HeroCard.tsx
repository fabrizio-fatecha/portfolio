import { Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroCard() {
  const { content } = useLanguage();

  return (
    <Box
      sx={{
        mb: 4,
        p: 5,
        borderRadius: 4,
        background: 'rgba(30, 41, 59, 0.5)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
        },
      }}
    >
      <Typography variant="h6" sx={{ color: '#818cf8', mb: 1 }}>
        {content.hero.greeting}
      </Typography>
      <Typography variant="h2" sx={{ color: 'white', mb: 2, fontWeight: 700 }}>
        {content.hero.name}
      </Typography>
      <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
        {content.hero.title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, maxWidth: 700 }}>
        {content.hero.description}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          href="#projects"
          sx={{
            bgcolor: '#6366f1',
            px: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              bgcolor: '#4f46e5',
            },
          }}
        >
          {content.hero.cta.projects}
        </Button>
        <Button
          variant="outlined"
          href="#contact"
          sx={{
            borderColor: 'rgba(99, 102, 241, 0.5)',
            color: '#818cf8',
            px: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              borderColor: '#6366f1',
              bgcolor: 'rgba(99, 102, 241, 0.1)',
            },
          }}
        >
          {content.hero.cta.contact}
        </Button>
      </Stack>
    </Box>
  );
}
