'use client';

import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi'

const BackButton = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('/')}
      className="fixed bottom-6 right-6 bg-transparent text-blue-600 hover:text-blue-800"
      aria-label="Voltar ao topo"
    >
        <FiArrowLeft className="mr-1" />
      Back
    </button>
  );
};

export default BackButton