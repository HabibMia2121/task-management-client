import { FaBars, FaHome } from "react-icons/fa";
import Container from "../container/Container";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import useAuth from "../hook/useAuth";
import { FaTasks } from "react-icons/fa";

const DashboardLayout = () => {
    const { user } = useAuth();

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
                        <Outlet />
                    </div>

                </Container>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="p-4 w-60 min-h-full bg-[#18212C] text-white font-semibold font-fontRoboto text-lg space-y-3">
                    {/* Sidebar content here */}
                    {/* profile part */}
                    <div className=" text-center space-y-3 mb-8 mt-3">
                        <img src={user?.photoURL}
                            className=" w-28 h-28 rounded-full inline-block" alt="not found" />
                        <h2>{user?.displayName}</h2>
                    </div>

                    {/* menu part */}
                    <li><NavLink to='/dashboard/main' className={`flex items-center gap-2 $`}>
                        <AiOutlineDashboard className="text-2xl" />Dashboard
                    </NavLink></li>
                    <li><NavLink to='/dashboard/addTask' className='flex items-center gap-2'>
                        <MdOutlineAddToPhotos className="text-2xl" />
                        Add New Task
                    </NavLink></li>
                    <li><NavLink to='/dashboard/task' className='flex items-center gap-2'>
                        <FaTasks className="text-2xl" />
                        Task
                    </NavLink></li>
                    <li><NavLink to='/dashboard/previousTask' className='flex items-center gap-2'>
                        <VscPreview className="text-2xl" />
                        Previous task
                    </NavLink></li>
                    <hr />
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