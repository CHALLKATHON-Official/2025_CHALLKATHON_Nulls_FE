import { Box, Typography, Tooltip } from '@mui/material';

interface Props {
  age: number;
  label: string;
  maxAge?: number;
}

const EventItem = ({ age, label, maxAge = 100 }: Props) => {
  const leftPercent = (age / maxAge) * 100;

  return (
    <Tooltip title={`${age}세 – ${label}`} arrow>
      <Box
        sx={{
          position: 'absolute',
          top: -12,
          left: `${leftPercent}%`,
          transform: 'translateX(-50%)',
        }}
      >
        <Box
          sx={{
            width: 14,
            height: 14,
            bgcolor: '#1976d2',
            borderRadius: '50%',
            border: '2px solid white',
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default EventItem;