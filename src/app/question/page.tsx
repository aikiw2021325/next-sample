import { HelpButton } from "@/components/button/HelpButton";
import { LogoutButton } from "@/components/button/LogoutButton";
import { CustomerCard } from "@/components/card/CustomerCard";
import { NoveltyMissonCard } from "@/components/card/NoveltyMissonCard";
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
        </div>
      </div>
    </div>
  );
}
