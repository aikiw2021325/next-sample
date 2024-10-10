import { SupportIcon } from '@/components/icon/SupportIcon';

export function HelpButton() {

  return (
    <button className="flex items-center justify-center rounded-lg hover:bg-blue-100 transition duration-300">
      <SupportIcon></SupportIcon>
    </button>
  );

}