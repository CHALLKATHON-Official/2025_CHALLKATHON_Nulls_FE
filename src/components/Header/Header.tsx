import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userState } from '../../userState'; // ✅ 상대 경로 확인해줘

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const user = useRecoilValue(userState); // ✅ 닉네임 불러오기
  const resetUser = useResetRecoilState(userState); // ✅ 로그아웃 시 초기화용

  const handleLogout = () => {
    localStorage.removeItem('token');
    resetUser(); // ✅ 전역 상태 초기화
    navigate('/login');
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* 로고 */}
        <Typography
          variant="h6"
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer' }}
        >
          ⏳ 인생 시계
        </Typography>

        {/* 우측 버튼들 */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <>
              {/* ✅ 닉네임 출력 */}
              {user.nickname && (
                <Typography sx={{ mr: 2, fontWeight: 600 }}>
                  {user.nickname}님
                </Typography>
              )}
              <IconButton onClick={() => navigate('/settings')} color="inherit">
                <SettingsIcon />
              </IconButton>
              <Button onClick={handleLogout} color="inherit">
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate('/login')} color="inherit">
                로그인
              </Button>
              <Button onClick={() => navigate('/signup')} color="inherit">
                회원가입
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;