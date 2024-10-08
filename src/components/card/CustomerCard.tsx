import { readLoginUserInfo } from "@/app/question/service/user";

type loginUserProps = {
  customer_id: number,
  login_date: string
}

export async function CustomerCard(props: loginUserProps) {

  const user = await readLoginUserInfo(props.customer_id, props.login_date);

  return (
    // customer card
    <div className="w-full h-hull mx-auto rounded-md shadow-lg overflow-hidden">
      {/* card headder */}
      <div className="bg-blue-600 h-6">
        <p className="px-2 text-white text-md sm:text-lg font-bold">Next-MIC 2024</p>
      </div>
      {/* card content */}
      <div className="p-4 bg-white">
        <div className="flex justify-around items-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm sm:text-base">お客様番号</p>
            {user ? (
              <p className="text-blue-500 text-xl sm:text-2xl font-bold">{user.user_id.toString()}</p>
            ) : (
              <p className="text-blue-500 text-xl sm:text-2xl font-bold">9999</p>
            )}

          </div>
          <div className="text-center">
            <p className="text-gray-500 text-md sm:text-lg font-bold">{user?.company_name}様</p>
          </div>
        </div>
      </div>
    </div>
  );

}