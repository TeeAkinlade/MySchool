import { Logo } from "./Logo";
import { SideBarRoutes } from "./SideBarRoutes";

const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex-col overflow-y-autobg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SideBarRoutes />
            </div>
        </div>
     );
}
    
export default Sidebar;