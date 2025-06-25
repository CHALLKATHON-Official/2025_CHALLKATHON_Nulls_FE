import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Header from '@/components/Header/Header';
import LifeCalculator from '@/components/Stats/LifeCalculator';
import { keyframes } from '@emotion/react';
import bgImage from '@/assets/alice-bg.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const LandingPage = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100dvh', // ✅ 화면 꽉 채우기 (모바일 지원 포함)
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: 6,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 500,                        // ✅ 초기 스타일로 복원
            backgroundColor: 'rgba(248, 250, 252, 0.4)', // 흰색 반투명 배경
            backdropFilter: 'blur(10px)',
            borderRadius: '1.5rem',
            p: 4,
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'rgba(2, 3, 15, 0.75)',
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
              color: 'rgba(2, 3, 15, 0.75)',
              animation: `${fadeIn} 1.3s ease-out`,
            }}
          >
            당신의 시간을 타임라인으로 기록하고 되돌아보세요.
          </Typography>

          <Typography
            sx={{
              mb: 4,
              fontSize: '0.9rem',
              color: 'rgba(2, 3, 15, 0.75)',
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

          <LifeCalculator />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;