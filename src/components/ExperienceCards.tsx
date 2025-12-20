import { Box, Typography, Paper, Chip, Stack } from '@mui/material';
import { BusinessCenter } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function ExperienceCards() {
  const { content } = useLanguage();

  return (
    <Box id="experience" sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>
        {content.experience.title}
      </Typography>
      <Stack spacing={3}>
        {content.experience.jobs.map((job: any, index: number) => (
          <Paper
            key={index}
            sx={{
              p: 3,
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: 3,
              borderLeft: '4px solid #6366f1',
              transition: 'all 0.3s',
              '&:hover': {
                borderColor: '#6366f1',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: 'rgba(99, 102, 241, 0.2)',
                  color: '#818cf8',
                }}
              >
                <BusinessCenter />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ color: 'white', mb: 0.5 }}>
                  {job.position}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#818cf8', mb: 1 }}>
                  {job.company}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                  {job.period} • {job.location}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
              {job.description}
            </Typography>
            <Box sx={{ mb: 2 }}>
              {job.achievements.slice(0, 3).map((achievement: string, idx: number) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,0.6)', mb: 0.5, pl: 2 }}
                >
                  • {achievement}
                </Typography>
              ))}
            </Box>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {job.technologies.map((tech: string, techIdx: number) => (
                <Chip
                  key={techIdx}
                  label={tech}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(99, 102, 241, 0.15)',
                    color: '#818cf8',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                  }}
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
