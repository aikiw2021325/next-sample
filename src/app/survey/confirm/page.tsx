"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const handleSubmit = () => {
    // 送信処理をここに追加します
    alert('送信が完了しました');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-screen-lg w-full">
        <div className="bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">回答内容の確認</h2>
          <p className="text-sm">以下の内容でよろしいですか？</p>
        </div>

        <div className="p-4 space-y-6">
          {/* 質問1 */}
          <div>
            <h3 className="font-semibold mb-2">1. イベントの満足度</h3>
            <p className="bg-gray-100 p-2 rounded-lg">満足</p>
          </div>

          {/* 質問2 */}
          <div>
            <h3 className="font-semibold mb-2">2. 改善してほしい点</h3>
            <p className="bg-gray-100 p-2 rounded-lg">
              セッションの時間をもう少し長くしてほしいです。
            </p>
          </div>

          {/* 質問3 */}
          <div>
            <h3 className="font-semibold mb-2">3. その他、ご意見・ご感想</h3>
            <p className="bg-gray-100 p-2 rounded-lg">
              とても勉強になりました。来年も参加したいです。
            </p>
          </div>

          {/* ボタン */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="w-1/2 ml-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg"
            >
              戻る
            </button>
            <button
              onClick={handleSubmit}
              className="w-1/2 ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              送信する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
