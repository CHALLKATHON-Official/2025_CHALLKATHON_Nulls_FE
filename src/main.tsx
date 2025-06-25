// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⚠️ 여기 필수
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* 이걸로 라우팅 시작점 감쌈 */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
