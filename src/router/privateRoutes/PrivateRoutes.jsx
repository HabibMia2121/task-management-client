import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className=" grid justify-center items-center h-screen">
            {/* <img src={loader} alt="not found" /> */}
            <h2>Loading ..........</h2>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/signIn' state={{ from: location }} replace>Sign In</Navigate>;

};

export default PrivateRoutes;