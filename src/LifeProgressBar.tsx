import React from 'react'

interface Props {
  percent: number
}

const LifeProgressBar: React.FC<Props> = ({ percent }) => {
  return (
    <div style={{ width: '100%', background: '#eee', borderRadius: '10px', overflow: 'hidden', marginTop: '1rem' }}>
      <div
        style={{
          width: `${percent}%`,
          background: percent > 75 ? '#e74c3c' : '#3498db',
          height: '24px',
          transition: 'width 0.5s ease-in-out',
        }}
      />
      <p style={{ textAlign: 'center', marginTop: '8px' }}>{percent}% 인생을 살았어요</p>
    </div>
  )
}

export default LifeProgressBar