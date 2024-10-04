
type customerProps = {
  customer_id: String,
  customer_name: String
}

export function CustomerCard(props: customerProps) {

  return (
    // customer card
    <div className="w-full h-hull mx-auto rounded-md shadow-lg overflow-hidden">
      {/* card headder */}
      <div className="bg-blue-500 h-7">
        <p className="px-2 text-white text-md sm:text-lg font-bold">Next-MIC 2024</p>
      </div>
      {/* card content */}
      <div className="p-4 bg-white">
        <div className="flex justify-around items-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm sm:text-base">お客様番号</p>
            <p className="text-blue-500 text-xl sm:text-2xl font-bold">{props.customer_id}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-md sm:text-lg font-bold">{props.customer_name}様</p>
          </div>
        </div>
      </div>
    </div>
  );

}