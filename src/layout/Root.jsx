import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div>
            {/* Header section here */}
            <Navbar/>

            {/* outlet here */}
            <Outlet />
            
            {/* footer section here */}
            <Footer/>

        </div>
    );
};

export default Root;