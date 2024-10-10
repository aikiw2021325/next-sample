import { NoteIcon } from '@/components/icon/NoteIcon';
type noveltyMissionProps = {
  progress: Number
}

export function QuestionMissonCard(props: noveltyMissionProps) {
  let progress_percent: String = '';
  let progress_color: String = '';

  if (props.progress == 0) {
    progress_percent = '';
    progress_color = ''
  } else if (props.progress == 1) {
    progress_percent = 'w-5/5';
    progress_color = 'bg-blue-600'
  }

  return (
    <div className="px-5 py-5 rounded-md shadow-lg bg-white w-full overflow-hidden">
      <div className="flex flex-row gap-x-2">
        <div className='w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover shrink-0'>
          <NoteIcon></NoteIcon>
        </div>

        <div className='flex flex-wrap'>
          <p className="hidden sm:block text-base">アンケートに回答して抽選会に参加しましょう</p>
          <p className="sm:hidden text-sm">アンケート回答で抽選会に参加</p>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
        <div className={`${progress_percent} ${progress_color} h-2.5 rounded-full`}></div>
      </div>
    </div>
  );
}