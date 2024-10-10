"use client";
import { AssignIcon } from '@/components/icon/AssignIcon';
import { useRouter } from 'next/navigation';

export function QuestionAnserButton() {
  const router = useRouter();

  const logoutClick = () => {
    router.push('/survey');  // "/"ページへ遷移
  };

  return (
    <button
      onClick={logoutClick}
      className="
      w-full flex flex-col items-center justify-center
      px-2 py-8
      bg-white hover:bg-blue-100
      rounded-lg
      transition duration-300
    "
    >
      <AssignIcon />
      <p className="text-sm sm:text-base">アンケートに答える</p>
      <p className="text-sm sm:text-base">(回答目安時間:5分)</p>
    </button>
  );

}