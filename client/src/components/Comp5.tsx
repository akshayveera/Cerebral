import { useEffect, useState } from "react";
import { getComp5Info } from "./utils/controller";
import { Comp5Info } from "./utils/interface";

const Comp5 = () => {

    const [data, setData] = useState<Comp5Info | null>(null);
    let greater: string = "";
    let total: number;
    const percentages = [];
    

    useEffect(() => {
        getComp5Info(setData);

    }, [])
    
    if(data) {
        if(data?.positive > data?.negative && data?.positive > data?.neutral){
            greater = "positive";
        } else if (data?.negative > data?.positive && data?.negative > data?.neutral){
            greater = "negative";
        } else {
            greater = "neutral";
        }

        total = data?.positive + data?.negative + data?.neutral;
        percentages.push((data?.negative/total)*100);
        percentages.push((data?.neutral/total)*100);
        percentages.push((data?.positive/total)*100);

    }

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col shadow-md gap-1">            
            
        <div className="text-xs font-medium text-gray-400">Community Feedback</div>
        <div className="font-semibold">Mostly {greater}</div>

        <div className="w-full flex gap-1 mt-2">
            <div className="bg-red-300 h-2 rounded-full" style={{ width: `${percentages[0]}%` }}></div>
            <div className="bg-yellow-300 h-2 rounded-full" style={{ width: `${percentages[1]}%` }}></div>
            <div className="bg-green-300 h-2 rounded-full" style={{ width: `${percentages[2]}%` }}></div>
        </div>

        <div className="flex gap-4 mt-4 justify-evenly">
            <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-400">Negative</span>
                <span className="text-sm">{data?.negative}</span>
            </div>

            <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-400">Neutral</span>
                <span className="text-sm">{data?.neutral}</span>
            </div>

            <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-400">Positive</span>
                <span className="text-sm">{data?.positive}</span>
            </div>

        </div>
    
    </div>
  )
}

export default Comp5