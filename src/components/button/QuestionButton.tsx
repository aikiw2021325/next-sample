import { GiftIcon } from '@/components/icon/GiftIcon';

const QuestionButton = () => {
  return (
    <button
      type="button"
      className="w-28 sm:w-32  h-28 sm:h-32 flex flex-col items-center justify-center rounded-md shadow-lg bg-gray-300 text-gray-500 hover:bg-gray-400 hover:text-gray-700 transition-all duration-200 shrink-0"
      aria-label="ノベルティを選択"
    >
      <GiftIcon />
      <span className="mt-2 text-center whitespace-nowrap text-sm sm:text-base">抽選会</span>
    </button>
  );
};

export default QuestionButton;