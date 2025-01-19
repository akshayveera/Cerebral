import {ArrowUp, ArrowDown } from "lucide-react";
import { Comp1Info } from "./utils/interface";
import { useEffect, useState } from "react";
import { getCommaseparated, getComp1Info } from "./utils/controller";


const Comp1 = () => {

    const [data, setData] = useState<Comp1Info | null>(null);

    const percentages = [
        { value : 32, isPositive : true},
        { value : 49, isPositive : true},
        { value : 7, isPositive : false},
    ]

    useEffect(() => {
        getComp1Info(setData);
    }, [])
    

  return (
    <div className="flex gap-2">
        {
            data && Object.keys(data).map( (item: string, index) => {
                return (
                    <div key={item} className="flex flex-col flex-1 gap-3 border border-gray-200 p-3 rounded-xl">
                        <div className="text-sm text-gray-500">
                            {item[0].toUpperCase() + item.slice(1)}
                        </div>
                        <div className="text-xl font-semibold flex gap-2">
                            {getCommaseparated(data[item])}
                            
                            {
                                percentages[index].isPositive ? (
                                    <div className="text-green-500 bg-green-100 font-medium text-xs flex items-center gap-1 px-2 rounded-full">
                                        +{percentages[index].value}%
                                        <ArrowUp size={15}/>
                                    </div>
                                ) : (
                                    <div className="text-red-500 bg-red-100 font-medium text-xs flex items-center gap-1 px-2 rounded-full">
                                        +{percentages[index].value}%
                                        <ArrowDown size={15}/>
                                    </div>
                                ) 
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Comp1