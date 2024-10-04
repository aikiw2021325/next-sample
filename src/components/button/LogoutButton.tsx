import { LogoutIcon } from '@/components/icon/LogoutIcon';

export function LogoutButton() {

  return (
    <button className="flex items-center justify-center rounded-lg hover:bg-blue-100 transition duration-300">
      <LogoutIcon></LogoutIcon>
    </button>
  );

}