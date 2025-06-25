import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Alert,
} from '@mui/material';
import Header from '@/components/Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '@/userState';

const EditProfilePage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios
      .get('http://localhost:8000/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setNickname(res.data.nickname);
        setEmail(res.data.email);
        setBirthDate(res.data.birth_date);
      })
      .catch((err) => {
        console.error('유저 정보 로드 실패:', err);
      });
  }, []);

  const handleSubmit = async () => {
    setError('');

    if (password && password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      await axios.patch(
        'http://localhost:8000/users/me',
        {
          nickname,
          email,
          birth_date: birthDate,
          ...(password && { password }),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser((prev) => ({
        ...prev,
        nickname,
        email,
        birth_date: birthDate,
      }));

      alert('정보가 성공적으로 변경되었습니다!');
      navigate('/settings');
    } catch (err: any) {
      console.error('정보 수정 실패:', err);
      setError('정보 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>
          ✏️ 내 정보 수정
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
              label="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              fullWidth
            />

            <TextField
              label="이메일"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />

            <TextField
              label="생년월일"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <TextField
              label="새 비밀번호 (선택)"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />

            <TextField
              label="비밀번호 확인"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Button variant="contained" onClick={handleSubmit}>
              저장하기
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default EditProfilePage;