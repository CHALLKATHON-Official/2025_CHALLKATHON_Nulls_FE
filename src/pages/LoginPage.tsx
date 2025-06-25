import { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Link as MuiLink,
} from '@mui/material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../userState';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('✅ handleLogin 실행됨');

    try {
      const res = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      const { access_token } = res.data;
      console.log('🔐 access_token:', access_token);
      localStorage.setItem('token', access_token);

      const meRes = await axios.get('http://localhost:8000/me', {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      // ✅ 사용자 전체 응답 확인
      console.log('🙋‍♂️ /me 응답:', JSON.stringify(meRes.data, null, 2));
      console.log('🎂 birth_date:', meRes.data.birth_date); // ✅ 생년월일 확인 로그 추가

      setUser(meRes.data);

      if (!meRes.data.nickname) {
        alert('⚠️ 사용자 정보에 nickname이 없습니다.');
        return;
      }

      alert(`${meRes.data.nickname}님, 환영합니다!`);
      navigate('/');
    } catch (err: any) {
      console.error('❌ 로그인 중 에러:', err);
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

      <Box>
        <form onSubmit={handleLogin}>
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
        </form>
      </Box>

      <Typography
        sx={{
          mt: 3,
          fontSize: '0.9rem',
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        계정이 없으신가요?{' '}
        <MuiLink
          component={Link}
          to="/signup"
          underline="hover"
          sx={{ color: 'primary.main', fontWeight: 500 }}
        >
          회원가입
        </MuiLink>
      </Typography>
    </Container>
  );
};

export default LoginPage;