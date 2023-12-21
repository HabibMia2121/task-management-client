import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero h-[450px] bannerImage" >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-fontRoboto text-white">My regular task</h1>
                    <p className="mb-5 font-fontRoboto text-white font-semibold">As a committed programmer, I adeptly navigate coding challenges, delivering efficient solutions while maintaining a focus on continual learning and improvement.</p>
                    <Link to='/dashboard' className=" py-2 px-3 bg-[#A9F5EB] hover:bg-[#94e3d8] rounded-lg text-[#18212C] font-fontRoboto font-bold">Let’s Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;