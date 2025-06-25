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

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // 로그인 상태 판단

  const handleLogout = () => {
    localStorage.removeItem('token');
    // TODO: 사용자 상태 초기화
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
        <Box>
          {isLoggedIn ? (
            <>
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