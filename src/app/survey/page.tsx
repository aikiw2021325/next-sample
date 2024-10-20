"use client"

import { ConfirmButton } from "@/components/button/ConfirmButton";
import { TitleCard } from "@/components/card/TitleCard";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-screen-lg w-full">
        {/* <div className="bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">アンケート</h2>
          <p className="text-sm">Next-MIC 2024についてお聞かせください</p>
        </div> */}
        <TitleCard title={'アンケート'} content={'Next-MIC 2024についてお聞かせください'}></TitleCard>

        <form className="p-4 space-y-6">
          {/* 質問1 */}
          <div>
            <label className="block font-semibold mb-2">
              1. イベントの満足度をお聞かせください
            </label>
            <div className="space-y-2">
              <label className="block bg-gray-100">
                <input type="radio" name="satisfaction" value="very_satisfied" className=" mr-2" />
                とても満足
              </label>
              <label className="block bg-gray-100">
                <input type="radio" name="satisfaction" value="satisfied" className="mr-2" />
                満足
              </label>
              <label className="block bg-gray-100">
                <input type="radio" name="satisfaction" value="average" className="mr-2" />
                普通
              </label>
              <label className="block bg-gray-100">
                <input type="radio" name="satisfaction" value="dissatisfied" className="mr-2" />
                不満
              </label>
              <label className="block bg-gray-100">
                <input type="radio" name="satisfaction" value="very_dissatisfied" className="mr-2" />
                とても不満
              </label>
            </div>
          </div>

          {/* 質問2 */}
          <div>
            <label className="block font-semibold mb-2">
              2. 改善してほしい点があればお聞かせください
            </label>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-lg"
              placeholder="改善点をご記入ください"
            ></textarea>
          </div>

          {/* 質問3 */}
          <div>
            <label className="block font-semibold mb-2">
              3. その他、ご意見・ご感想があればお聞かせください
            </label>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-lg"
              placeholder="ご意見・ご感想をご記入ください"
            ></textarea>
          </div>

          {/* ボタン */}
          <div className="flex justify-center">
            <ConfirmButton></ConfirmButton>
          </div>
        </form>
      </div>
    </div>
  );
}