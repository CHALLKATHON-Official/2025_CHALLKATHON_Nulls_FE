import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  Paper,
  Alert,
} from '@mui/material';
import Header from '@/components/Header/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('로그인이 필요합니다.');
        return;
      }

      await axios.post(
        'http://localhost:8000/auth/verify-password',
        { password },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // 성공 시 다음 페이지로 이동
      navigate('/settings/edit');
    } catch (err: any) {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>
          🔒 정보 변경을 위해 비밀번호 확인
        </Typography>

        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: 4,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}
        >
          <Stack spacing={3}>
            <TextField
              type="password"
              label="현재 비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Button variant="contained" onClick={handleSubmit}>
              다음
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default VerifyPasswordPage;