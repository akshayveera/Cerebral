import Dashboard from "./Dashboard"
import RightSideBar from "./RightSideBar"

const MainContainer = () => {
  return (
    <div className="w-full flex gap-4">

        <Dashboard />
        <RightSideBar />
    </div>
  )
}

export default MainContainer