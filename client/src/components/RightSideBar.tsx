import Comp3 from "./Comp3"
import Comp4 from "./Comp4"
import Comp5 from "./Comp5"

const RightSideBar = () => {
  return (
    <div className="w-1/4 flex flex-col gap-4">
        
        <Comp3 />

        <Comp4 />

        <Comp5 />
    </div>
  )
}

export default RightSideBar