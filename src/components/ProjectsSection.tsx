import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle, AttachMoney } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function ProjectsSection() {
  const { content } = useLanguage();

  return (
    <Box id="projects" sx={{ py: 10, bgcolor: '#f7f3e9' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2, color: '#4a4a4a' }}
        >
          {content.projects.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#6b6b6b',
          }}
        >
          {content.projects.subtitle}
        </Typography>
        <Grid container spacing={4}>
          {content.projects.list.map((project: any, index: number) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'white',
                  border: '2px solid #f7e8e8',
                  borderRadius: 4,
                  boxShadow: 'none',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 12px 32px rgba(230,164,180,0.25)',
                    borderColor: '#e6a4b4',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '2px solid #f7e8e8',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ mb: 1, color: '#4a4a4a', fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mb: 2, color: '#a8c8e1', fontWeight: 500 }}>
                    {project.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: '#6b6b6b', lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>
                  <Chip
                    icon={project.impact.includes('$') ? <AttachMoney /> : undefined}
                    label={project.impact}
                    size="small"
                    sx={{
                      mb: 2,
                      bgcolor: '#fff8f0',
                      color: '#c9a4d8',
                      border: '1.5px solid #c9a4d8',
                      fontWeight: 500,
                    }}
                  />
                  <List dense>
                    {project.highlights.map((highlight: string, idx: number) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle sx={{ fontSize: 16, color: '#a8c8e1' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={highlight}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { color: '#6b6b6b', lineHeight: 1.6 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                    {project.technologies.map((tech: string, techIdx: number) => (
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}