import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { isAuthenticated } from "./utils/controller"
import { useGlobalContext } from "./utils/GlobalContext"
import { useNavigate } from "react-router"
import { useToast } from "@/hooks/use-toast"


export function LoginForm() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { setLoggedIn} = useGlobalContext();
    const navigate = useNavigate();
    const { toast } = useToast()

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("username", username);
        console.log("password", password);

        isAuthenticated(username, password)
            .then((flag) => {
                if(flag) {
                    setLoggedIn(true);
                    navigate('/');
                    toast({
                        description : "Logged in successfully"
                    })
                } else {
                    toast({
                        description : "Wrong username or password"
                    })
                }
            })
            .catch(() => {
                toast({
                    description : "Something went wrong"
                })
            })
    }

  return (
    <Card className="w-[350px] flex flex-col gap-5">
        <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your username and password to login</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="username">Username</Label>
                        <Input 
                            id="username" 
                            placeholder="Enter your username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password" >Password</Label>
                        <Input 
                            id="password" 
                            type="password"
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                </div>
            </CardContent>
            <CardFooter className="flex mt-4">
                <Button type="submit">Login</Button>
            </CardFooter>
        </form>
    </Card>
  )
}

