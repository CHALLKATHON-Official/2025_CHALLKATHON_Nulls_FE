import { Box, LinearProgress, Typography } from '@mui/material';

interface LifeProgressBarProps {
  percent: number;
}

const getProgressColor = (percent: number): string => {
  if (percent < 20) return '#4caf50'; // 초록
  if (percent < 40) return '#2196f3'; // 파랑
  if (percent < 60) return '#ff9800'; // 주황
  if (percent < 80) return '#f44336'; // 빨강
  return '#212121'; // 검정
};

const LifeProgressBar = ({ percent }: LifeProgressBarProps) => {
  const color = getProgressColor(percent);

  return (
    <Box>
      <Typography align="center" variant="subtitle1" gutterBottom>
        현재까지 {percent.toFixed(1)}% 인생을 살았어요
      </Typography>
      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#eee',
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
          },
        }}
      />
    </Box>
  );
};

export default LifeProgressBar;
