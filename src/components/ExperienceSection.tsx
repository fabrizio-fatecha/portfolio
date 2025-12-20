import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Work, TrendingUp } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function ExperienceSection() {
  const { content } = useLanguage();

  return (
    <Box id="experience" sx={{ py: 10, bgcolor: '#f7f3e9' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2, color: '#4a4a4a' }}
        >
          {content.experience.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#6b6b6b',
          }}
        >
          {content.experience.subtitle}
        </Typography>
        <Timeline position="alternate">
          {content.experience.jobs.map((job: any, index: number) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent sx={{ m: 'auto 0', color: '#a8c8e1' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{job.period}</Typography>
                <Typography variant="body2" sx={{ color: '#6b6b6b' }}>
                  {job.location}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: '#e6a4b4',
                    boxShadow: '0 0 20px rgba(230,164,180,0.4)',
                  }}
                >
                  <Work />
                </TimelineDot>
                {index < content.experience.jobs.length - 1 && (
                  <TimelineConnector sx={{ bgcolor: '#f7e8e8' }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 3, px: 2 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: 'white',
                    border: '2px solid #f7e8e8',
                    borderRadius: 4,
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(230,164,180,0.2)',
                      borderColor: '#e6a4b4',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1, color: '#4a4a4a', fontWeight: 600 }}>
                    {job.position}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, color: '#e6a4b4', fontWeight: 500 }}>
                    {job.company}
                  </Typography>
                  <Typography sx={{ mb: 2, color: '#6b6b6b', lineHeight: 1.7 }}>
                    {job.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {job.achievements.map((achievement: string, idx: number) => (
                      <Box
                        key={idx}
                        sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}
                      >
                        <TrendingUp sx={{ fontSize: 16, color: '#a8c8e1', mr: 1, mt: 0.5 }} />
                        <Typography variant="body2" sx={{ color: '#6b6b6b', lineHeight: 1.6 }}>
                          {achievement}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {job.technologies.map((tech: string, techIdx: number) => (
                      <Chip
                        key={techIdx}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: '#fff8f0',
                          color: '#e6a4b4',
                          border: '1.5px solid #e6a4b4',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}