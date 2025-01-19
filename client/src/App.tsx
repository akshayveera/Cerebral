import {  useNavigate } from "react-router";
import MainContainer from "./components/MainContainer"
import Sidebar from "./components/Sidebar"
import { useGlobalContext } from "./components/utils/GlobalContext"
import { useEffect } from "react";
import { Toaster } from "./components/ui/toaster";

const App = () => {

  const {loggedIn} = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login');
    }
  });

  return (
    <div className="bg-gray-100 flex p-3 pl-6 min-h-screen max-w-screen">
      <Sidebar />
      <MainContainer />
      <Toaster />
    </div>
  )
}

export default App