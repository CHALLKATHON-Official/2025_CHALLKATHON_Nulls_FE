import { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userState } from '@/userState';
import { parseISO, format } from 'date-fns';
import LifeProgressBar from '@/components/Timeline/LifeProgressBar';
import LifeDonutChart from '@/components/Stats/LifeDonutChart';
import BirthdayOverlay from '@/components/Effects/BirthdayOverlay';

const LifeCalculator = () => {
  const user = useRecoilValue(userState);
  const isLoggedIn = !!user?.birth_date;

  const [manualBirth, setManualBirth] = useState('');
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [percentage, setPercentage] = useState<number | null>(null);

  const birthDateString = isLoggedIn
    ? format(parseISO(user.birth_date), 'yyyy-MM-dd')
    : manualBirth;

  const today = new Date();
  const birthForCompare = isLoggedIn
    ? parseISO(user.birth_date)
    : manualBirth
    ? new Date(manualBirth)
    : null;

  const isBirthday =
    birthForCompare &&
    today.getMonth() === birthForCompare.getMonth() &&
    today.getDate() === birthForCompare.getDate();

  const calculate = () => {
    if (!birthDateString) return;

    const birthDate = new Date(birthDateString);
    const ageInMs = today.getTime() - birthDate.getTime();
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);

    const percent = Math.min((ageInYears / lifeExpectancy) * 100, 100);
    setPercentage(parseFloat(percent.toFixed(2)));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {isLoggedIn && isBirthday && (
        <BirthdayOverlay nickname={user?.nickname || '당신'} />
      )}

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          인생 퍼센트 계산기
        </Typography>

        <Box sx={{ mt: 4, width: '100%' }}>
          <TextField
            fullWidth
            label="생년월일"
            type="date"
            value={birthDateString}
            onChange={(e) => setManualBirth(e.target.value)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              readOnly: isLoggedIn,
            }}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="기대수명"
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(Number(e.target.value))}
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={calculate}
          >
            계산하기
          </Button>
        </Box>

        {percentage !== null && (
          <Card sx={{ mt: 4, backgroundColor: '#fff', width: '100%' }}>
            <CardContent>
              <Typography variant="h6" align="center">
                현재 인생 진행률: {percentage}%
              </Typography>

              <Box sx={{ my: 3 }}>
                <LifeProgressBar percent={percentage} />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 2,
                }}
              >
                <LifeDonutChart percent={percentage} />
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default LifeCalculator;
