import { useNavigate } from 'react-router-dom';

export default function MainEntry() {
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-white text-center"
    >
      <h1 className="text-3xl font-bold mb-4">🧭 독립 메인 진입 포털</h1>
      <p className="mb-6 text-gray-600">인생 퍼센트 계산기로 이동</p>
      <button
        onClick={() => navigate('/life-clock')}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        ⏳ 인생 퍼센트 계산기 시작하기
      </button>
    </div>
  );
}
