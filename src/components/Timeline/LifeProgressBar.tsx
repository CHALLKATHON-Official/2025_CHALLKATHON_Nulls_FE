import { Box, LinearProgress, Typography } from '@mui/material';

interface LifeProgressBarProps {
  percent: number;
}

const LifeProgressBar = ({ percent }: LifeProgressBarProps) => {
  const color = percent > 75 ? '#e53935' : '#1976d2'; // 75% 넘어가면 경고색

  return (
    <Box>
      <Typography align="center" variant="subtitle1" gutterBottom>
        현재까지 {percent}% 인생을 살았어요
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