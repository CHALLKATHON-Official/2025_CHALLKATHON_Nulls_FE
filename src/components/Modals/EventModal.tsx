import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (event: { age: number; title: string; description: string }) => void;
}

const EventModal = ({ open, onClose, onSubmit }: Props) => {
  const [age, setAge] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!age || !title) return;
    onSubmit({ age: Number(age), title, description });
    setAge('');
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>이벤트 추가하기</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField
            label="나이 (예: 23)"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
          />
          <TextField
            label="제목 (예: 대학 입학)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            label="설명 (선택)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={2}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button variant="contained" onClick={handleAdd}>
          추가
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventModal;