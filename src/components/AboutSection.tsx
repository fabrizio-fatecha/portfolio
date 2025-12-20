import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Code, CloudQueue, Settings } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { content } = useLanguage();

  const iconMap = {
    0: <Code sx={{ fontSize: 40 }} />,
    1: <CloudQueue sx={{ fontSize: 40 }} />,
    2: <Settings sx={{ fontSize: 40 }} />,
  };

  return (
    <Box id="about" sx={{ py: 10, bgcolor: '#fff8f0' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2, color: '#4a4a4a' }}
        >
          {content.about.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', mb: 3, color: '#e6a4b4' }}
        >
          {content.about.subtitle}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 8,
            maxWidth: '800px',
            mx: 'auto',
            color: '#6b6b6b',
            lineHeight: 1.8,
          }}
        >
          {content.about.description}
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {content.about.highlights.map((highlight: any, index: number) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: 'white',
                  border: '2px solid #f7e8e8',
                  borderRadius: 4,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(230,164,180,0.2)',
                    borderColor: '#e6a4b4',
                  },
                }}
              >
                <Box sx={{ color: '#e6a4b4', mb: 2 }}>
                  {iconMap[index as keyof typeof iconMap]}
                </Box>
                <Typography variant="h5" sx={{ mb: 2, color: '#4a4a4a', fontWeight: 600 }}>
                  {highlight.title}
                </Typography>
                <Typography sx={{ color: '#6b6b6b', lineHeight: 1.7 }}>
                  {highlight.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: '#e6a4b4', mb: 1, fontWeight: 600 }}>
                {content.about.stats.experience}
              </Typography>
              <Typography sx={{ color: '#6b6b6b' }}>
                {content.about.stats.experience}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: '#e6a4b4', mb: 1, fontWeight: 600 }}>
                3+
              </Typography>
              <Typography sx={{ color: '#6b6b6b' }}>
                {content.about.stats.projects}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: '#e6a4b4', mb: 1, fontWeight: 600 }}>
                {content.about.stats.technologies}
              </Typography>
              <Typography sx={{ color: '#6b6b6b' }}>
                {content.about.stats.technologies}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}