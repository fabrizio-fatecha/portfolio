import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';

export function Skills() {
  const skills = [
    { name: 'React & React Native', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Material-UI', level: 85 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'RESTful APIs', level: 80 },
  ];

  return (
    <Box id="skills" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2 }}
        >
          Habilidades
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Tecnologías con las que trabajo
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6">
                    {skill.name}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    bgcolor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: '#667eea',
                      borderRadius: 5,
                    },
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
