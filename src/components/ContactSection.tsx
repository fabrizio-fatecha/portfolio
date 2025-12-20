import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { Email, LocationOn, WorkOutline, Send } from '@mui/icons-material';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { content } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Email />, label: content.contact.form.email, value: content.contact.info.email },
    { icon: <LocationOn />, label: content.contact.info.location, value: content.contact.info.location },
    { icon: <WorkOutline />, label: content.contact.info.availability, value: content.contact.info.availability },
  ];

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: '#fff8f0' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2, color: '#4a4a4a' }}
        >
          {content.contact.title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: 'center', mb: 2, color: '#e6a4b4' }}
        >
          {content.contact.subtitle}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#6b6b6b',
          }}
        >
          {content.contact.description}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ mb: 4 }}>
              {contactInfo.map((info, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    bgcolor: 'white',
                    border: '2px solid #f7e8e8',
                    borderRadius: 4,
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(230,164,180,0.15)',
                      borderColor: '#e6a4b4',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  <Box sx={{ color: '#e6a4b4' }}>{info.icon}</Box>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#6b6b6b' }}>
                      {info.label}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#4a4a4a', fontWeight: 500 }}>
                      {info.value}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'white',
                border: '2px solid #f7e8e8',
                borderRadius: 4,
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
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#f7e8e8',
                        borderWidth: '2px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#e6a4b4',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#e6a4b4',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#e6a4b4',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label={content.contact.form.email}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#f7e8e8',
                        borderWidth: '2px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#e6a4b4',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#e6a4b4',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#e6a4b4',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label={content.contact.form.subject}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#f7e8e8',
                        borderWidth: '2px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#e6a4b4',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#e6a4b4',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#e6a4b4',
                    },
                  }}
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
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#f7e8e8',
                        borderWidth: '2px',
                      },
                      '&:hover fieldset': {
                        borderColor: '#e6a4b4',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#e6a4b4',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#e6a4b4',
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  fullWidth
                  sx={{
                    bgcolor: '#e6a4b4',
                    color: 'white',
                    borderRadius: '12px',
                    py: 1.5,
                    boxShadow: '0 4px 14px rgba(230,164,180,0.35)',
                    '&:hover': {
                      bgcolor: '#d98fa3',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(230,164,180,0.4)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  {content.contact.form.send}
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          {content.contact.success}
        </Alert>
      </Snackbar>
    </Box>
  );
}