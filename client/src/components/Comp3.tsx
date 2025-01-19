import { useEffect, useState } from "react";
import { Meter } from "./Meter"
import { Comp3Info } from "./utils/interface";
import { getComp3Info } from "./utils/controller";

const Comp3 = () => {

    const [data, setData] = useState<Comp3Info | null>(null);

    useEffect(() => {
        getComp3Info(setData);
    }, [])

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-7 shadow-md  h-[330px]">
        
        <Meter scoreData={data?.score}/>

        <div className="flex flex-col gap-2 relative bottom-20 border-t border-gray-200 pt-4">
            <div className="font-medium ">{data?.title}!</div>

            <div className="text-sm text-gray-400 font-medium">{data?.message}</div>

            <span className="text-sm text-gray-500 p-4 py-2 rounded-full border-2 border-gray-200 w-fit mt-2 cursor-pointer">Improve your score</span>
        </div>

    </div>
  )
}

export default Comp3