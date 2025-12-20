import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsSection() {
  const { content } = useLanguage();

  return (
    <Box id="skills" sx={{ py: 10, bgcolor: '#fff8f0' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2, color: '#4a4a4a' }}
        >
          {content.skills.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#6b6b6b',
          }}
        >
          {content.skills.subtitle}
        </Typography>
        <Grid container spacing={4}>
          {content.skills.categories.map((category: any, catIndex: number) => (
            <Grid item xs={12} md={6} key={catIndex}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'white',
                  border: '2px solid #f7e8e8',
                  borderRadius: 4,
                  height: '100%',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(230,164,180,0.15)',
                    borderColor: '#e6a4b4',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 3, color: '#e6a4b4', textAlign: 'center', fontWeight: 600 }}
                >
                  {category.name}
                </Typography>
                {category.skills.map((skill: any, skillIndex: number) => (
                  <Box key={skillIndex} sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}
                    >
                      <Typography sx={{ color: '#4a4a4a', fontWeight: 500 }}>
                        {skill.name}
                      </Typography>
                      <Typography sx={{ color: '#a8c8e1', fontWeight: 600 }}>
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        bgcolor: '#f7e8e8',
                        '& .MuiLinearProgress-bar': {
                          bgcolor: '#e6a4b4',
                          borderRadius: 5,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}