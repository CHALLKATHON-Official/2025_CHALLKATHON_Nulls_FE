import { useState } from 'react';
import { Box, Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Header from '@/components/Header/Header';
import LifeAnalyzer from '@/components/Timeline/LifeAnalyzer';
import TimelineBar from '@/components/Timeline/TimelineBar';
import EventItem from '@/components/Timeline/EventItem';
import StatOverlay from '@/components/Stats/StatOverlay';
import EventModal from '@/components/Modals/EventModal';

const MainTimelinePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([
    { age: 23, title: '대학교 졸업', description: '학사 마침!' },
    { age: 26, title: '첫 회사', description: '기억에 남는 시작' },
  ]);

  const handleAddEvent = (e: { age: number; title: string; description: string }) => {
    setEvents((prev) => [...prev, e]);
  };

  // 통계 기반 평균 경험 데이터 (예시)
  const stats = [
    { age: 27, label: '첫 연애 평균 나이' },
    { age: 31, label: '결혼 평균 나이' },
  ];

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ py: 4, position: 'relative' }}>
        <LifeAnalyzer />

        {/* 타임라인 구성 */}
        <Box position="relative" sx={{ mt: 6 }}>
          <TimelineBar
            events={events.map((e) => ({ age: e.age, label: e.title }))}
          />
          {events.map((e, i) => (
            <EventItem key={i} age={e.age} label={e.title} />
          ))}
          <StatOverlay data={stats} />
        </Box>

        {/* ➕ 버튼 */}
        <Fab
          color="primary"
          sx={{ position: 'fixed', bottom: 40, right: 40 }}
          onClick={() => setModalOpen(true)}
        >
          <AddIcon />
        </Fab>

        {/* 모달 */}
        <EventModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddEvent}
        />
      </Container>
    </>
  );
};

export default MainTimelinePage;