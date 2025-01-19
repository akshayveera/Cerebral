import { useEffect, useState } from "react"
import { getComp6Info } from "./utils/controller"
import { Comp6Info } from "./utils/interface";
import { ProductsTable} from "./ProductsTable";

const Comp6 = () => {

    const [data, setData] = useState<Comp6Info | null>(null);

    useEffect(()=> {
        getComp6Info(setData)
    }, [])

  return (
    <div className="flex flex-col gap-4">
            
        <div className="text-xl font-medium flex items-center justify-between">
            Top Products

            <span className="text-sm text-gray-500 p-4 py-2 rounded-full border-2 border-gray-200 cursor-pointer">Full Results</span>            
        </div>

        <ProductsTable products={data} />

        
    </div>
  )
}

export default Comp6