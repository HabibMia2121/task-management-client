import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/header/banner/Banner";

const Root = () => {
    return (
        <div>
            {/* Header section here */}
            <Navbar />
            <Banner/>

            {/* outlet here */}
            <Outlet />
            
            {/* footer section here */}
            <Footer/>

        </div>
    );
};

export default Root;