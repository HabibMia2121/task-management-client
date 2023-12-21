import { FaBars, FaHome } from "react-icons/fa";
import Container from "../container/Container";
import { NavLink, Outlet} from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
// import DashboardMain from "../pages/Dashboard/DashboardMain";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";

const DashboardLayout = () => {
    // const location = useLocation();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Container>
                    <label htmlFor="my-drawer-2" className="lg:hidden grid justify-end my-4 text-xl px-4">
                        <FaBars />
                    </label>
                    <div className=" lg:mx-5 lg:my-6">
                        {/* outlet here */}
                        {/* {
                            (location?.pathname == '/dashboard') ? <DashboardMain /> : <Outlet />
                        } */}
                        <Outlet />
                    </div>

                </Container>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="p-4 w-60 min-h-full bg-[#18212C] text-white font-semibold font-fontRoboto text-lg space-y-3">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/main' className={`flex items-center gap-2 $`}>
                        <AiOutlineDashboard className="text-2xl" />Dashboard
                    </NavLink></li>
                    <li><NavLink to='/dashboard/addTask' className='flex items-center gap-2'>
                        <MdOutlineAddToPhotos className="text-2xl" />
                        Add New Task
                    </NavLink></li>
                    <li><NavLink to='/dashboard/previousTask' className='flex items-center gap-2'>
                        <VscPreview className="text-2xl" />
                        Previous task
                    </NavLink></li>

                    <li><NavLink to='/' className='flex items-center gap-2'>
                        <FaHome className="text-2xl" />
                        Home
                    </NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;