import { Link } from 'react-router-dom';
import './Banner.css'
import { useEffect } from 'react';
import AOS from 'aos';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    },[])
    return (
        <div id='home' className="hero h-[450px] bannerImage " >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-fontRoboto text-white" data-aos="fade-up"
                        data-aos-duration="2000">Regular task</h1>
                    <p className="mb-5 font-fontRoboto text-white font-semibold" data-aos="fade-up"
                        data-aos-duration="3000">As a committed programmer, I adeptly navigate coding challenges, delivering efficient solutions while maintaining a focus on continual learning and improvement
                    </p>
                    <div data-aos="zoom-in">
                      <Link to='/dashboard/main' className=" py-2 px-3 bg-[#A9F5EB] hover:bg-[#94e3d8] rounded-lg text-[#18212C] font-fontRoboto font-bold" >Let’s Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;