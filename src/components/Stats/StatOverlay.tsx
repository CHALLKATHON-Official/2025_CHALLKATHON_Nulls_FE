import { Box, Typography, Tooltip } from '@mui/material';

interface Props {
  data: {
    age: number;
    label: string;
  }[];
  maxAge?: number;
}

const StatOverlay = ({ data, maxAge = 100 }: Props) => {
  return (
    <>
      {data.map((item, idx) => {
        const left = (item.age / maxAge) * 100;

        return (
          <Tooltip key={idx} title={`${item.age}세 – ${item.label}`} arrow>
            <Box
              sx={{
                position: 'absolute',
                top: 20,
                left: `${left}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: '#9e9e9e',
                  borderRadius: '50%',
                  opacity: 0.6,
                }}
              />
            </Box>
          </Tooltip>
        );
      })}
    </>
  );
};

export default StatOverlay;