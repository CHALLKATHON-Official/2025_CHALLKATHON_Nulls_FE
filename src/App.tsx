import { Routes, Route, Navigate } from 'react-router-dom';
import YourFeature from './components/YourFeature';  // 기존 퍼센트 계산기
import MainEntry from './pages/MainEntry';           // 새롭게 만든 독립 메인 페이지

function App() {
  return (
    <Routes>
      {/* ✅ 루트로 들어오면 /main으로 자동 이동 */}
      <Route path="/" element={<Navigate to="/main" replace />} />

      {/* ✅ 독립된 진입용 메인 페이지 */}
      <Route path="/main" element={<MainEntry />} />

      {/* ✅ 기존 퍼센트 계산기 페이지 */}
      <Route path="/life-clock" element={<YourFeature />} />
    </Routes>
  );
}

export default App;
