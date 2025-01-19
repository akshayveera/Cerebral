import { useEffect, useState } from "react";
import { LineGraph } from "./LineGraph"
import { Comp4Info } from "./utils/interface";
import { getCommaseparated, getComp4Info } from "./utils/controller";

const Comp4 = () => {

    const [data1, setData1] = useState<Comp4Info | null>(null);
    let web_sales = 0;
    let offline_sales = 0;

    useEffect(() => {
        getComp4Info(setData1);
    }, [])

    if(data1) {
        web_sales = Math.round(((data1[data1.length - 1].web_sales - data1[0].web_sales) / 15) * 100);
        offline_sales = Math.round(((data1[data1.length - 1].offline_sales - data1[0].offline_sales) / 15)*100);

        console.log(data1[data1.length - 1].web_sales, data1[0].web_sales);
        console.log(data1[data1.length - 1].offline_sales, data1[0].offline_sales);
        console.log("web_sales", web_sales);
        console.log("offline_sales", offline_sales);
    }



  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-7 shadow-md  ">
            
        <div className="font-medium ">Customer by device</div>

        <LineGraph chartData={data1}/>

        <div className="flex gap-4 justify-evenly -mt-4">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="text-[0.75rem] text-gray-400">Web sales</div>
                    <span className="h-3 w-3 rounded bg-blue-600"></span>
                </div>
                <div className="text-xs font-semibold">{getCommaseparated(web_sales) }%</div>
            </div>
            <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
                    <div className="text-[0.75rem] text-gray-400">Offline sales</div>
                    <span className="h-3 w-3 rounded bg-blue-300"></span>
                </div>
                <div className="text-xs font-semibold">{getCommaseparated(offline_sales) }%</div>
            </div>
        </div>
    
    </div>
  )
}

export default Comp4