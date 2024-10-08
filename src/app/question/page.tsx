import { HelpButton } from "@/components/button/HelpButton";
import { LogoutButton } from "@/components/button/LogoutButton";
import { QuestionAnserButton } from "@/components/button/QuestionAnswerButton";
import { CustomerCard } from "@/components/card/CustomerCard";
import { NoveltyMissonCard } from "@/components/card/NoveltyMissonCard";
import { QuestionMissonCard } from "@/components/card/QuestionMissonCard";
import { Headder } from "@/components/headder/Headder";

export default function Home() {

  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <div className="p-2">
        <div className="container mx-auto w-full">
          <div className="flex flex-row items-center justify-between">
            <Headder message="お客様情報"></Headder>
            <LogoutButton></LogoutButton>
          </div>
          <CustomerCard customer_id={1362} login_date={'20240516'}></CustomerCard>
          <div className="flex flex-row items-center justify-between">
            <Headder message="ミッション"></Headder>
            <HelpButton></HelpButton>
          </div>
          <div className="flex flex-row">
            <NoveltyMissonCard progress={1}></NoveltyMissonCard>
          </div>
          <div className="my-2"></div>
          <div className="flex flex-row">
            <QuestionMissonCard progress={0}></QuestionMissonCard>
          </div>
          <Headder message="アクション"></Headder>
          <QuestionAnserButton></QuestionAnserButton>
        </div>
      </div>
    </div>
  );
}
