import { Box, Avatar, Typography, IconButton, Divider, Stack, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email, Cloud } from '@mui/icons-material';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export function Sidebar() {
  const { content } = useLanguage();

  const navItems = [
    { label: content.nav.about, href: '#about' },
    { label: content.nav.experience, href: '#experience' },
    { label: content.nav.skills, href: '#skills' },
    { label: content.nav.projects, href: '#projects' },
    { label: content.nav.contact, href: '#contact' },
  ];

  return (
    <Box
      sx={{
        width: 320,
        height: '100vh',
        position: 'sticky',
        top: 0,
        bgcolor: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(99, 102, 241, 0.1)',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        p: 3,
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 2,
            bgcolor: '#6366f1',
            fontSize: '3rem',
          }}
        >
          FS
        </Avatar>
        <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>
          Fullstack Dev
        </Typography>
        <Chip
          icon={<Cloud sx={{ fontSize: 16 }} />}
          label="Azure Certified"
          size="small"
          sx={{
            bgcolor: 'rgba(99, 102, 241, 0.2)',
            color: '#818cf8',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}
        />
      </Box>

      <Divider sx={{ borderColor: 'rgba(99, 102, 241, 0.2)', mb: 3 }} />

      <Stack spacing={1} sx={{ mb: 'auto' }}>
        {navItems.map((item, index) => (
          <Box
            key={index}
            component="a"
            href={item.href}
            sx={{
              display: 'block',
              py: 1.5,
              px: 2,
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              borderRadius: 2,
              transition: 'all 0.3s',
              '&:hover': {
                color: '#818cf8',
                bgcolor: 'rgba(99, 102, 241, 0.1)',
                transform: 'translateX(8px)',
              },
            }}
          >
            {item.label}
          </Box>
        ))}
      </Stack>

      <Divider sx={{ borderColor: 'rgba(99, 102, 241, 0.2)', mb: 2 }} />

      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
        <IconButton
          size="small"
          sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#818cf8' } }}
          href="https://github.com"
          target="_blank"
        >
          <GitHub />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#818cf8' } }}
          href="https://linkedin.com"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          size="small"
          sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#818cf8' } }}
          href="#contact"
        >
          <Email />
        </IconButton>
      </Stack>

      <LanguageToggle />
    </Box>
  );
}
