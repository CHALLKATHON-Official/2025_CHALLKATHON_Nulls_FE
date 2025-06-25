import { useMemo, useState, useEffect } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  IconButton,
  Box,
  Tooltip,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import MainTimelinePage from './pages/MainTimelinePage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import bgImage from '@/assets/alice-bg.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' || false;
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode]
  );

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 🌙 다크모드 토글 버튼 (오른쪽 아래 + 가독성 강화) */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 30,
          zIndex: 9999,
        }}
      >
        <Tooltip title={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}>
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            sx={{
              backgroundColor: darkMode
                ? 'rgba(255,255,255,0.08)'
                : 'rgba(0,0,0,0.06)',
              color: darkMode ? '#ffffff' : '#1a1a1a',
              border: darkMode
                ? '1px solid rgba(255,255,255,0.25)'
                : '1px solid rgba(0,0,0,0.1)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: darkMode
                  ? 'rgba(255,255,255,0.15)'
                  : 'rgba(0,0,0,0.1)',
              },
            }}
          >
            {darkMode ? <Brightness4 fontSize="medium" /> : <Brightness7 fontSize="medium" />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* 🎨 배경이 적용된 전체 앱 컨테이너 */}
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/timeline" element={<MainTimelinePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;