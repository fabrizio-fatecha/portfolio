import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Code, Speed, Devices } from '@mui/icons-material';

export function About() {
  const features = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Código Limpio',
      description: 'Escribo código mantenible y escalable siguiendo las mejores prácticas.',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Rendimiento',
      description: 'Optimización para garantizar la mejor experiencia de usuario.',
    },
    {
      icon: <Devices sx={{ fontSize: 40 }} />,
      title: 'Responsive',
      description: 'Diseños que funcionan perfectamente en todos los dispositivos.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Sobre Mí
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            color: 'text.secondary',
          }}
        >
          Soy un desarrollador apasionado por crear aplicaciones web modernas y funcionales.
          Con experiencia en tecnologías front-end y un enfoque en la experiencia del usuario,
          transformo ideas en realidad digital.
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box sx={{ color: '#667eea', mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
