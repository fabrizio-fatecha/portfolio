import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
            }}
          >
            Hola, soy Desarrollador Web
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Creando experiencias digitales increíbles con React, TypeScript y más
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mb: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
              href="#projects"
            >
              Ver Proyectos
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
              href="#contact"
            >
              Contacto
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              sx={{ color: 'white' }}
              startIcon={<GitHub />}
              href="https://github.com"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              sx={{ color: 'white' }}
              startIcon={<LinkedIn />}
              href="https://linkedin.com"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              sx={{ color: 'white' }}
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
