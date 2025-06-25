import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  percent: number;
}

const LifeDonutChart = ({ percent }: Props) => {
  const data = {
    labels: ['살아온 인생', '남은 인생'],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: ['#42a5f5', '#e0e0e0'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: 200, height: 200 }}>
      <Doughnut data={data} />
    </div>
  );
};

export default LifeDonutChart;