import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip, Stack } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function ProjectsGrid() {
  const { content } = useLanguage();

  return (
    <Box id="projects" sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>
        {content.projects.title}
      </Typography>
      <Grid container spacing={3}>
        {content.projects.list.map((project: any, index: number) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card
              sx={{
                height: '100%',
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 3,
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: '#6366f1',
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
                sx={{ borderBottom: '1px solid rgba(99, 102, 241, 0.2)' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#818cf8', mb: 1 }}>
                  {project.company}
                </Typography>
                <Chip
                  label={project.impact}
                  size="small"
                  icon={<TrendingUp sx={{ fontSize: 14 }} />}
                  sx={{
                    bgcolor: 'rgba(139, 92, 246, 0.2)',
                    color: '#a78bfa',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    mb: 2,
                  }}
                />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {project.technologies.slice(0, 4).map((tech: string, techIdx: number) => (
                    <Chip
                      key={techIdx}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(99, 102, 241, 0.15)',
                        color: '#818cf8',
                        fontSize: '0.7rem',
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
