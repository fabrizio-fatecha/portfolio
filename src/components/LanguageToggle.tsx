import { IconButton, Box } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
      <IconButton
        onClick={() => setLanguage('es')}
        sx={{
          color: language === 'es' ? '#818cf8' : 'rgba(255,255,255,0.5)',
          border: language === 'es' ? '1px solid #6366f1' : '1px solid transparent',
          borderRadius: 2,
          fontSize: '0.875rem',
          px: 2,
          '&:hover': {
            color: '#818cf8',
            bgcolor: 'rgba(99, 102, 241, 0.1)',
          },
        }}
      >
        ES
      </IconButton>
      <IconButton
        onClick={() => setLanguage('en')}
        sx={{
          color: language === 'en' ? '#818cf8' : 'rgba(255,255,255,0.5)',
          border: language === 'en' ? '1px solid #6366f1' : '1px solid transparent',
          borderRadius: 2,
          fontSize: '0.875rem',
          px: 2,
          '&:hover': {
            color: '#818cf8',
            bgcolor: 'rgba(99, 102, 241, 0.1)',
          },
        }}
      >
        EN
      </IconButton>
    </Box>
  );
}