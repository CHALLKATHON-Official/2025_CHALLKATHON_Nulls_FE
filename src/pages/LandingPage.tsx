import { Typography } from '@mui/material';
import Header from '@/components/Header/Header';
import LifeCalculator from '@/components/Stats/LifeCalculator';

const LandingPage = () => {
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
      {/* 상단 네비게이션 */}
      <Header />

      {/* 가운데 카드 영역 */}
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
            textAlign: 'center',
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
            }}
          >
            {"당신의 인생을\n시각화해보세요"}
          </Typography>

          <Typography sx={{ mb: 4, color: '#475569' }}>
            당신의 시간을 타임라인으로 기록하고 되돌아보세요.
          </Typography>

          <LifeCalculator />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
