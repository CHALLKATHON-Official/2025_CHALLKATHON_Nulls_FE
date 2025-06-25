import { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/auth/login', {
        username,
        password,
      });

      const { access_token } = res.data;
      localStorage.setItem('token', access_token);

      alert('로그인 성공!');
      navigate('/timeline');
    } catch (err: any) {
      const detail = err.response?.data?.detail;
      const message = Array.isArray(detail)
        ? detail.map((e: any) => e.msg).join(', ')
        : detail || '로그인에 실패했습니다.';
      alert(`로그인 실패: ${message}`);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        로그인
      </Typography>

      <Box component="form" onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          label="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 4 }}
        />

        <Button type="submit" variant="contained" fullWidth>
          로그인
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;