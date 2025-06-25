import { Container, Typography } from '@mui/material';
import Header from '@/components/Header/Header';
import LifeCalculator from '@/components/Stats/LifeCalculator';

const LandingPage = () => {
  return (
    <>
      <Header />

      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* Hero Section */}
        <Typography variant="h3" align="center" gutterBottom>
          당신의 인생을 시각화해보세요
        </Typography>

        <Typography align="center" sx={{ mb: 6 }}>
          당신의 시간을 타임라인으로 기록하고 되돌아보세요.
        </Typography>

        {/* 기능 섹션 */}
        <LifeCalculator />
      </Container>
    </>
  );
};

export default LandingPage;