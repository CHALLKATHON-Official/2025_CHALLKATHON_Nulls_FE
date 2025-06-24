import { useState } from 'react'
import LifeProgressBar from './LifeProgressBar'
import LifeDonutChart from './LifeDonutChart'

function LifePage() {
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
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>인생 퍼센트 계산기</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>생년월일: </label>
        <input
          type="date"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>기대수명: </label>
        <input
          type="number"
          value={lifeExpectancy}
          onChange={(e) => setLifeExpectancy(Number(e.target.value))}
        />
      </div>

      <button onClick={calculate}>계산</button>

      {percentage !== null && (
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ textAlign: 'center' }}>현재 인생 진행률: {percentage}%</h2>
          <LifeProgressBar percent={percentage} />
          <LifeDonutChart percent={percentage} />
        </div>
      )}
    </div>
  )
}

export default LifePage