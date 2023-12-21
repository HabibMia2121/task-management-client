import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/header/banner/Banner";


const Root = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('signIn') || location.pathname.includes('signUp');

    return (
        <div>
            {/* Header section here */}
            <Navbar />
            {/* banner section here */}
            {
                noFooter || <Banner />
            }

            {/* outlet here */}
            <Outlet />
            
            {/* footer section here */}
            {
                noFooter || <Footer />
            }
            
        </div>
    );
};

export default Root;