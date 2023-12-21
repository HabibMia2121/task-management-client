import { Link } from "react-router-dom";
import Container from "../../container/Container";
import logo from '../../../src/assets/logo/task-logo.png'
import { MdCall, MdEmail } from "react-icons/md";
import { FaAddressCard, FaLinkedinIn } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <div className=" bg-[#18212C] relative">
                <Container>
                    <footer className="footer justify-center md:px-5 md:justify-normal lg:px-0 py-20  font-fontRoboto ">
                        <aside>
                            <div className=" flex  md:gap-2 items-center">
                                <img
                                    src={logo}
                                    alt="not found"
                                    className=" w-20 md:w-24 h-auto"
                                />
                            </div>
                            <div className=" flex gap-2 text-[#94A3B8]">
                               
                            </div>
                            <div className=" flex gap-2 text-[#94A3B8]">
                                
                            </div>

                        </aside>
                        <nav>
                            <header className="footer-title text-xl mb-4 text-white  opacity-100">
                                Company
                            </header>
                            <Link className="link link-hover text-[#fff] hover:text-[#D1FFF9]">
                                Home
                            </Link>
                            <Link className="link link-hover text-[#fff] hover:text-[#D1FFF9]">
                               Add to task
                            </Link>
                            <Link className="link link-hover text-[#fff] hover:text-[#D1FFF9]">
                               Dashboard
                            </Link>
                        </nav>
                        <nav>
                            <header className=" footer-title text-xl mb-4 text-white  opacity-100 ">
                                Contact
                            </header>
                            <div className=" space-y-3 text-[#fff]">
                                <div className=" flex gap-2">
                                    <MdEmail className=" text-xl" />
                                    contact@yourdomain.com
                                </div>
                                <div className=" flex gap-2">
                                    <MdCall className=" text-xl" />
                                    Phone: +1(2)345 6789
                                </div>
                                <div className=" flex gap-2">
                                    <FaAddressCard className=" text-xl" />
                                    Address: Dhaka,Bangladesh
                                </div>
                            </div>
                        </nav>
                        
                        <nav>
                            <header className="footer-title text-xl mb-4 text-white  opacity-100">
                                Social Link
                            </header>
                            <div>
                                <div className="grid justify-center lg:justify-start">
                                    <div className="flex gap-4">
                                        <a href="#" className="bg-[#fff] p-2 rounded-full hover:bg-[#D1FFF9] ">
                                            <GrFacebookOption className="text-2xl " />
                                        </a>
                                        <a href="#" className="bg-[#fff] p-2 rounded-full hover:bg-[#D1FFF9] ">
                                            <IoLogoInstagram className="text-2xl " />
                                        </a>
                                        <a href="#" className="bg-[#fff] p-2 rounded-full hover:bg-[#D1FFF9] ">
                                            <IoLogoTwitter className="text-2xl " />
                                        </a>
                                        <a href="#" className="bg-[#fff] p-2 rounded-full hover:bg-[#D1FFF9] ">
                                            <FaLinkedinIn className="text-2xl " />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </footer>
                        {/* copyright part here */}
                        <div className=" text-center py-5">
                            <span className=" text-[#94A3B8] ">
                                Copyright © 2020. All rights reserved by, task management
                            </span>
                        </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;