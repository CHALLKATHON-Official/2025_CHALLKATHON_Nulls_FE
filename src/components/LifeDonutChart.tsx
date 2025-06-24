import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface Props {
  percent: number
}

const LifeDonutChart: React.FC<Props> = ({ percent }) => {
  const remaining = 100 - percent

  const data = {
    labels: ['살아온 시간', '남은 시간'],
    datasets: [
      {
        data: [percent, remaining],
        backgroundColor: ['#3498db', '#ddd'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div style={{ width: '250px', margin: '2rem auto' }}>
      <Doughnut data={data} />
    </div>
  )
}

export default LifeDonutChart