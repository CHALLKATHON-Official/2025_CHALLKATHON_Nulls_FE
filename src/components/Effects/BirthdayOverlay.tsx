import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Box, Typography, useTheme } from '@mui/material';

const BirthdayOverlay = ({ nickname }: { nickname: string }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 7000); // 7초 후 사라짐
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '100vh',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.0) 80%)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: theme.spacing(4),
            borderRadius: 2,
            boxShadow: 6,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#ff4081', mb: 2 }}>
            🎉 {nickname || '친구'}님 생일 축하합니다! 🎂
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            오늘 하루, 당신이 주인공이에요 🌟
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BirthdayOverlay;