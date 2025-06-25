import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#fdfdfd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        🚧 길을 잃으셨나요?
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        찾으시는 페이지가 존재하지 않아요<br />
        하지만 괜찮아요, 당신의 인생은 계속되니까요.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        홈으로 돌아가기
      </Button>
    </Box>
  );
};

export default NotFoundPage;