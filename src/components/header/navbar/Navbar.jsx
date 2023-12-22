import {Link, NavLink } from "react-router-dom";
import Container from "../../../container/Container";
import logo from '../../../assets/logo/task-logo.png'
import './Navbar.css'
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navLink = <>
        <li><NavLink to='/' className=''>Home</NavLink></li>
        <li><NavLink to='/whoBenefit'>Who Benefit</NavLink></li>
        <li><NavLink to='/dashboard/main'>Dashboard</NavLink></li>
    </>
    const handleLogut = () => {
        logOut()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });
                Toast.fire({
                    icon: "success",
                    title: "logout completed",
                });
            })
    }
    return (
        <div className=" bg-[#18212C]">
            <Container>
                <div className="navbar text-white py-2 ">
                    {/* navbar start */}
                    <div className="navbar-start">
                        <div className="dropdown mr-2">
                            <label tabIndex={0} className="btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-fontRoboto font-semibold bg-[#18212C] rounded-box w-52">
                                {navLink}
                            </ul>
                        </div>
                        {/* logo here */}
                        <div className=" flex items-center justify-center gap-2">
                            <img src={logo} className=" w-20 h-20 " alt="not found" />
                        </div>
                    </div>
                    {/* navbar-center */}
                    <div className="navbar-center gap-16">
                        <div className="hidden lg:flex">
                            <ul className="gap-4 text-lg menu-horizontal px-1 font-fontRoboto font-semibold">
                                {navLink}
                            </ul>
                        </div>
                    </div>
                    {/* navbar end */}
                    <div className="navbar-end">
                        {
                            user ? <>
                                <button onClick={handleLogut} className=" py-2 px-3 bg-[#D1FFF9] hover:bg-[#bff7ef] rounded-lg text-[#18212C] font-fontRoboto font-bold">Logout</button>
                            </> : <>
                                <Link to='/signIn' className=" py-2 px-3 bg-[#D1FFF9] hover:bg-[#bff7ef] rounded-lg text-[#18212C] font-fontRoboto font-bold">Sign In</Link>
                            </>
                        }
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;