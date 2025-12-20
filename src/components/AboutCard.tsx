import { Box, Typography, Grid, Paper } from '@mui/material';
import { Code, Cloud, Settings } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutCard() {
  const { content } = useLanguage();

  const icons = [<Code />, <Cloud />, <Settings />];

  return (
    <Box id="about" sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>
        {content.about.title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, lineHeight: 1.8 }}>
        {content.about.description}
      </Typography>
      <Grid container spacing={2}>
        {content.about.highlights.map((item: any, index: number) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 3,
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: '#6366f1',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box sx={{ color: '#818cf8', mb: 2 }}>{icons[index]}</Box>
              <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
