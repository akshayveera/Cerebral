import {Route, Routes} from "react-router"
import App from './App.tsx'
import Login from "./components/Login.tsx"

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default AppRoutes