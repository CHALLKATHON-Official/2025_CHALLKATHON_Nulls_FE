import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  Divider,
  CircularProgress,
  Button,
  Paper,
} from '@mui/material';
import Header from '@/components/Header/Header';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [user, setUser] = useState<null | {
    nickname: string;
    email: string;
    birth_date: string;
  }>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('http://localhost:8000/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({
          nickname: data.nickname,
          email: data.email,
          birth_date: data.birth_date,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('유저 정보 가져오기 실패:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>
          ⚙️ 내 정보
        </Typography>

        {loading ? (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <CircularProgress />
          </Box>
        ) : user ? (
          <Paper
            elevation={3}
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 3,
              backgroundColor: 'rgba(255, 255, 255, 0.13)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  닉네임
                </Typography>
                <Typography variant="body1">{user.nickname}</Typography>
                <Divider sx={{ mt: 1 }} />
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  이메일
                </Typography>
                <Typography variant="body1">{user.email}</Typography>
                <Divider sx={{ mt: 1 }} />
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  생년월일
                </Typography>
                <Typography variant="body1">{user.birth_date}</Typography>
                <Divider sx={{ mt: 1 }} />
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => navigate('/settings/verify-password')}
              >
                정보 변경
              </Button>
            </Stack>
          </Paper>
        ) : (
          <Typography color="error" sx={{ mt: 4 }}>
            사용자 정보를 불러올 수 없습니다.
          </Typography>
        )}
      </Container>
    </>
  );
};

export default SettingsPage;