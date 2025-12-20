import { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { Send, Email, LocationOn, Work } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactCard() {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box id="contact" sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>
        {content.contact.title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: 3,
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Email sx={{ color: '#818cf8' }} />
              <Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                  Email
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  {content.contact.info.email}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <LocationOn sx={{ color: '#818cf8' }} />
              <Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                  Location
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                  {content.contact.info.location}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Work sx={{ color: '#818cf8' }} />
              <Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                  Status
                </Typography>
                <Typography variant="body1" sx={{ color: '#10b981' }}>
                  {content.contact.info.availability}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 3,
              background: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: 3,
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={content.contact.form.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ mb: 2, '& .MuiInputBase-root': { color: 'white' } }}
              />
              <TextField
                fullWidth
                label={content.contact.form.email}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ mb: 2, '& .MuiInputBase-root': { color: 'white' } }}
              />
              <TextField
                fullWidth
                label={content.contact.form.subject}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                sx={{ mb: 2, '& .MuiInputBase-root': { color: 'white' } }}
              />
              <TextField
                fullWidth
                label={content.contact.form.message}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
                sx={{ mb: 2, '& .MuiInputBase-root': { color: 'white' } }}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<Send />}
                fullWidth
                sx={{
                  bgcolor: '#6366f1',
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { bgcolor: '#4f46e5' },
                }}
              >
                {content.contact.form.send}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success">{content.contact.success}</Alert>
      </Snackbar>
    </Box>
  );
}
