import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsGrid() {
  const { content } = useLanguage();

  return (
    <Box id="skills" sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>
        {content.skills.title}
      </Typography>
      <Grid container spacing={2}>
        {content.skills.categories.map((category: any, catIndex: number) => (
          <Grid item xs={12} sm={6} md={4} key={catIndex}>
            <Paper
              sx={{
                p: 2.5,
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: '#818cf8', mb: 2, fontWeight: 600 }}
              >
                {category.name}
              </Typography>
              {category.skills.map((skill: any, skillIndex: number) => (
                <Box key={skillIndex} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ color: 'white' }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#818cf8' }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      bgcolor: 'rgba(99, 102, 241, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#6366f1',
                        borderRadius: 3,
                      },
                    }}
                  />
                </Box>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
