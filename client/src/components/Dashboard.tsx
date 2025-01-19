
import { ChevronDown } from "lucide-react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp6 from "./Comp6";

const Dashboard = () => {

  return (
    <div className="bg-white flex-1 rounded-2xl p-8 flex flex-col gap-7 shadow-md">
      
      <div className="flex items-center justify-between">
        <div className="text-3xl font-semibold">Dashboard</div>
        <div className="font-medium text-gray-700 text-sm flex gap-2 items-center">
          Compare to 
          <span className="text-sm text-gray-500 p-4 py-2 rounded-full border-2 border-gray-200 cursor-pointer flex gap-1 items-center">Last year <ChevronDown size={20}/></span>
        </div>
      </div>

      <Comp1 />

      <Comp2 />

      <Comp6 />

    </div>
  )
}

export default Dashboard