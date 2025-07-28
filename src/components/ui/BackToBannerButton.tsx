'use client';

import { usePathname, useRouter } from "next/navigation";
import { BsArrowUp } from "react-icons/bs";
import { useEffect, useState } from "react";

const BackToBannerButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (pathname === '/') return null;

  return (
    <button
      onClick={() => router.push('/')}
      className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-neutral-900 text-white border border-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Voltar ao banner"
    >
      <BsArrowUp className="text-xl" />
    </button>
  );
};

export default BackToBannerButton;
