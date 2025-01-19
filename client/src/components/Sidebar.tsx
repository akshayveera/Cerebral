import { BarChartBig, LayoutDashboard, List, Plug2, Pyramid, Settings, User, Workflow } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router";
import { useGlobalContext } from "./utils/GlobalContext";
import { useToast } from "@/hooks/use-toast";


const Sidebar = () => {

    const navigate = useNavigate();
    const {setLoggedIn} = useGlobalContext();
    const { toast } = useToast();

    const options = [
        {
            icon : <Settings size={20}/>, 
            text: "Settings"
        },
        {
            icon : <User size={20}/>,
            text: "Team"
        }
    ];

    const menuOptions = [
        {
            icon : <LayoutDashboard size={20}/>, 
            text: "Dashboards"
        },
        {
            icon : <BarChartBig size={20}/>,
            text: "Campaigns"
        },
        {
            icon : <Workflow size={20}/>,
            text: "Flows"
        },
        {
            icon : <Plug2 size={20}/>,
            text: "Integrations"
        },
        {
            icon : <List size={20}/>,
            text: "Customers"
        },
    ];

    function handleLogout() {
        setLoggedIn(false);
        navigate('/logout');
        toast({
            description : 'Logged out successfully'
        })
    }


    return (
        <section className="w-1/6 px-4">

            <div className="flex gap-2 items-center font-bold text-xl py-4">
                <Pyramid />
                Salesway
            </div>

            {
                options.map((option) => {
                    return (
                        <div className="flex items-center gap-3 text-sm font-semibold py-3 cursor-pointer hover:bg-white rounded-lg hover:shadow-sm px-4 -ml-4 mb-2 " key={option.text}>
                            <div className="text-gray-400">
                                {option.icon}
                            </div>
                            <div className="text-gray-500">
                                {option.text}
                            </div>
                        </div>
                    )
                })
            }

            <div className="text-gray-500 font-semibold text-xs py-3">MENU</div>

            {
                menuOptions.map((option) => {
                    return (
                        <div className="flex items-center gap-3 text-sm font-semibold py-3 hover:bg-white rounded-lg hover:shadow-sm px-4 -ml-4 mb-2 cursor-pointer" key={option.text}>
                            <div className="text-gray-400 ">
                                {option.icon}
                            </div>
                            <div className="text-gray-500 ">
                                {option.text}
                            </div>
                        </div>
                    )
                })
            }

            <div className="flex flex-col gap-2 fixed bottom-5 left-5 w-48">
                <span 
                    onClick={handleLogout}
                    className="text-sm text-gray-500 p-4 py-2 rounded-full border-2 bg-white cursor-pointer flex gap-1 items-center justify-center hover:bg-gray-200">
                        Logout
                </span>
                <div className="flex items-center bg-white rounded-full p-3 px-5 gap-2 ">
                    <Avatar className="h-7 w-7">
                        <AvatarImage  src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <span>Akshay</span>
                </div>
            </div>

        </section>
    )
}

export default Sidebar