// src/App.tsx
import { useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import MainTimelinePage from './pages/MainTimelinePage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

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
      
      {/* 오른쪽 상단 토글 버튼 */}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>

      {/* 라우팅 */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/timeline" element={<MainTimelinePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
