"use client";
import { LogoutIcon } from '@/components/icon/LogoutIcon';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  const logoutClick = () => {
    router.push('/');  // "/"ページへ遷移
  };

  return (
    <button onClick={logoutClick} className="flex items-center justify-center rounded-lg hover:bg-blue-100 transition duration-300">
      <LogoutIcon></LogoutIcon>
    </button>
  );

}