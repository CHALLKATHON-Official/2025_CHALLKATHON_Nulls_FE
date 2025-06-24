import { useState } from 'react'
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
} from '@mui/material'
import LifeProgressBar from './LifeProgressBar'
import LifeDonutChart from './LifeDonutChart'

function YourFeature() {
  const [birth, setBirth] = useState('')
  const [lifeExpectancy, setLifeExpectancy] = useState(85)
  const [percentage, setPercentage] = useState<number | null>(null)

  const calculate = () => {
    if (!birth) return

    const birthDate = new Date(birth)
    const today = new Date()
    const ageInMs = today.getTime() - birthDate.getTime()
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25)

    const percent = Math.min((ageInYears / lifeExpectancy) * 100, 100)
    setPercentage(parseFloat(percent.toFixed(2)))
  }

  return (
    <Box
      sx={{
        width: '100vw', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 2,
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          인생 퍼센트 계산기
        </Typography>

        <Box sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="생년월일"
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 3 }}
          />

          <TextField
            fullWidth
            label="기대수명"
            type="number"
            value={lifeExpectancy}
            onChange={(e) => setLifeExpectancy(Number(e.target.value))}
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={calculate}
          >
            계산하기
          </Button>
        </Box>

        {percentage !== null && (
          <Card sx={{ mt: 4, backgroundColor: '#ffffff' }}>
            <CardContent>
              <Typography variant="h6" align="center">
                현재 인생 진행률: {percentage}%
              </Typography>
              <Box sx={{ my: 2 }}>
                <LifeProgressBar percent={percentage} />
              </Box>
              <LifeDonutChart percent={percentage} />
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  )
}

export default YourFeature