import { Pyramid } from "lucide-react"
import { LoginForm } from "./LoginForm"
import { Toaster } from "./ui/toaster"

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center -mt-14">

      <div className="flex gap-2 items-center font-bold text-3xl py-4">
          <Pyramid />
          Salesway
      </div>
      
      <LoginForm />
      <Toaster />
    </div>
  )
}

export default Login