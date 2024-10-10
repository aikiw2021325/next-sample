import { WalkIcon } from '@/components/icon/WalkIcon';
type noveltyMissionProps = {
  progress: Number
}

export function NoveltyMissonCard(props: noveltyMissionProps) {
  let progress_percent: String = '';
  let progress_color: String = '';

  if (props.progress == 0) {
    progress_percent = '';
    progress_color = 'bg-blue-600'
  }
  else if (props.progress == 1) {
    progress_percent = 'w-1/5';
    progress_color = 'bg-blue-600'
  } else if (props.progress == 2) {
    progress_percent = 'w-2/5';
    progress_color = 'bg-blue-600'

  } else if (props.progress == 3) {
    progress_percent = 'w-3/5';
    progress_color = 'bg-blue-600'

  } else if (props.progress == 4) {
    progress_percent = 'w-4/5';
    progress_color = 'bg-blue-600'
  } else if (props.progress == 5) {
    progress_percent = 'w-5/5';
    progress_color = 'bg-blue-600'
  }

  return (
    <div className="px-5 py-5 rounded-md shadow-lg bg-white w-full overflow-hidden">
      <div className="flex flex-row gap-x-2">
        <div className='w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover shrink-0'>
          <WalkIcon></WalkIcon>
        </div>

        <div className='flex flex-wrap'>
          <p className="hidden sm:block text-base">ブースを訪問してノベルティをGETしましょう</p>
          <p className="sm:hidden text-sm">ブース訪問でノベルティをGET</p>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
        <div className={`${progress_percent} ${progress_color} h-2.5 rounded-full`}></div>
      </div>
    </div>
  );
}