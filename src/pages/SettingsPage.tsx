import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';
import Header from '@/components/Header/Header';

const SettingsPage = () => {
  const [nickname, setNickname] = useState('정혁');
  const [birth, setBirth] = useState('1999-01-01');
  const [lifeExpectancy, setLifeExpectancy] = useState(83);

  const handleSave = () => {
    // TODO: 서버에 업데이트 요청 보내기
    console.log({ nickname, birth, lifeExpectancy });
    alert('설정이 저장되었어요!');
  };

  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>
          ⚙️ 내 정보 설정
        </Typography>

        <Stack spacing={3} mt={3}>
          <TextField
            label="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            fullWidth
          />
          <TextField
            label="생년월일"
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            label="기대 수명"
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(Number(e.target.value))}
            fullWidth
          />

          <Button variant="contained" onClick={handleSave}>
            저장하기
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default SettingsPage;