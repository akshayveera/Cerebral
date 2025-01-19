import { Comp2Info } from "./utils/interface"
import { BarGraph } from "./BarGraph";
import { useEffect, useState } from "react";
import { getComp2Info } from "./utils/controller";
import { ChevronDown } from "lucide-react";

const Comp2 = ( ) => {

    const [data, setData] = useState<Comp2Info | null>(null);

    useEffect(() => {
        getComp2Info(setData);
    }, [])

  return (
    <div className="flex flex-col">
        
        <div className="text-xl font-medium flex items-center justify-between ">
            Comparision

            <div className="text-xs">
                <span className="text-sm text-gray-500 p-4 py-2 rounded-full border-2 border-gray-200 cursor-pointer flex gap-1 items-center">6 months <ChevronDown size={20}/></span>
            </div>
        </div>

        <div className="w-full py-6">
            <BarGraph chartData={data} />
        </div>

        <div className="flex gap-6 items-center justify-center">
            <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded bg-blue-300"></div>
                <span className="text-xs">LAST YEAR</span>
            </div>

            <div className="flex gap-1 items-center">
                <div className="w-3 h-3 rounded bg-blue-600"></div>
                <span className="text-xs">THIS YEAR</span>
            </div>
        </div>
    </div>
  )
}

export default Comp2