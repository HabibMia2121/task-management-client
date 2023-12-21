import {NavLink } from "react-router-dom";
import Container from "../../../container/Container";
import logo from '../../../assets/logo/task-logo.png'
import './Navbar.css'

const Navbar = () => {
    const navLink = <>
        <li><NavLink to='/' className=''>Home</NavLink></li>
        <li><NavLink to='/addTask'>Add to task</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
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
                        <button className=" py-2 px-3 bg-[#D1FFF9] rounded-lg text-[#18212C] font-fontRoboto font-bold">Sign In</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;