import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface TimelineEvent {
  id: string;
  age: number;
  label: string;
  icon: string;
}

export default function TimelineEditor() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [age, setAge] = useState('');
  const [label, setLabel] = useState('');
  const [icon, setIcon] = useState('🎯');

  const handleAdd = () => {
    if (!age || !label) return;
    const newEvent: TimelineEvent = {
      id: uuidv4(),
      age: parseInt(age),
      label,
      icon,
    };
    setEvents(prev => [...prev, newEvent]);
    setAge('');
    setLabel('');
  };

  const handleDelete = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  return (
    <Box mt={4}>
      <Typography variant="h6">인생 이벤트 추가</Typography>
      <Box display="flex" gap={1} mt={2}>
        <TextField
          label="나이"
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
          size="small"
        />
        <TextField
          label="이벤트 설명"
          value={label}
          onChange={e => setLabel(e.target.value)}
          size="small"
        />
        <TextField
          label="아이콘"
          value={icon}
          onChange={e => setIcon(e.target.value)}
          size="small"
        />
        <Button variant="contained" onClick={handleAdd}>
          추가
        </Button>
      </Box>

      {/* 이벤트 목록 */}
      <Box mt={3}>
        {events
          .sort((a, b) => a.age - b.age)
          .map(event => (
            <Box key={event.id} display="flex" gap={2} alignItems="center" mt={1}>
              <span style={{ fontSize: '1.5rem' }}>{event.icon}</span>
              <Typography>{event.age}세 - {event.label}</Typography>
              <Button size="small" onClick={() => handleDelete(event.id)}>삭제</Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
