import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Header from '@/components/Header/Header';
import LifeCalculator from '@/components/Stats/LifeCalculator';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingPage = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: "url('/alice-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '2rem',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: '1.5rem',
            padding: '3rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#1e293b',
              whiteSpace: 'pre-line',
              lineHeight: 1.3,
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            {"당신의 인생을\n시각화해보세요"}
          </Typography>

          <Typography
            sx={{
              mb: 2,
              color: '#475569',
              animation: `${fadeIn} 1.3s ease-out`,
            }}
          >
            당신의 시간을 타임라인으로 기록하고 되돌아보세요.
          </Typography>

          {/* ⏳ 실시간 시계 */}
          <Typography
            sx={{
              mb: 4,
              fontSize: '0.9rem',
              color: '#6b7280',
              animation: `${fadeIn} 1.5s ease-out`,
            }}
          >
            {now.toLocaleString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            })}
          </Typography>

          {/* 🧮 계산기 기능 */}
          <LifeCalculator />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
