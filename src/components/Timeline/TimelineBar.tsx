import { Box, Typography } from '@mui/material';

interface Props {
  events: {
    age: number;
    label: string;
  }[];
  maxAge?: number;
}

const TimelineBar = ({ events, maxAge = 100 }: Props) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        📈 인생 타임라인
      </Typography>

      <Box
        sx={{
          position: 'relative',
          height: 20,
          bgcolor: '#e0e0e0',
          borderRadius: 10,
        }}
      >
        {/* 이벤트 마커 렌더링 */}
        {events.map((event, idx) => {
          const leftPercent = (event.age / maxAge) * 100;

          return (
            <Box
              key={idx}
              sx={{
                position: 'absolute',
                top: -10,
                left: `${leftPercent}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  bgcolor: '#1976d2',
                  borderRadius: '50%',
                  border: '2px solid white',
                }}
              />
                <Typography variant="caption" sx={{ mt: 0.5, whiteSpace: 'nowrap' }}>
                  {event.label}
                </Typography>
            </Box>
          );
        })}
      </Box>

      {/* 나이 축 눈금 */}
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="caption">0세</Typography>
        <Typography variant="caption">{maxAge}세</Typography>
      </Box>
    </Box>
  );
};

export default TimelineBar;