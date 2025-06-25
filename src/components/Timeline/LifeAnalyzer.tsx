import { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import LifeProgressBar from './LifeProgressBar';
import LifeDonutChart from '@/components/Stats/LifeDonutChart';

const LifeAnalyzer = () => {
  const [birth, setBirth] = useState('');
  const [lifeExpectancy, setLifeExpectancy] = useState(83);
  const [percent, setPercent] = useState<number | null>(null);

  const calculate = () => {
    if (!birth) return;

    const birthDate = new Date(birth);
    const today = new Date();
    const ageMs = today.getTime() - birthDate.getTime();
    const ageYears = ageMs / (1000 * 60 * 60 * 24 * 365.25);
    const p = Math.min((ageYears / lifeExpectancy) * 100, 100);
    setPercent(parseFloat(p.toFixed(2)));
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" gutterBottom>
        🔍 생년월일로 현재 인생 진행률 확인
      </Typography>
      <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
        <TextField
          label="생년월일"
          type="date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField
          label="기대 수명"
          type="number"
          value={lifeExpectancy}
          onChange={(e) => setLifeExpectancy(Number(e.target.value))}
          fullWidth
        />
        <Button variant="contained" onClick={calculate}>
          계산하기
        </Button>
      </Box>

      {percent !== null && (
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <LifeProgressBar percent={percent} />
            <Box mt={2}>
              <LifeDonutChart percent={percent} />
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default LifeAnalyzer;