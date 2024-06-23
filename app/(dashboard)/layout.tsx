import { Navbar } from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }: {children: React.ReactNode}) => {
    return ( 
        <main className="h-full">
            <div>
                <div className="h-[80px] md:pl-56 fixed inset-y-0 z-50 w-full">
                    <Navbar />
                </div>
                <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                    <Sidebar />
                </div>
            </div>
            <div className="md:pl-56 pt-[80px] h-full">
                {children}
            </div>
        </main>
     );
}
 
export default DashboardLayout;