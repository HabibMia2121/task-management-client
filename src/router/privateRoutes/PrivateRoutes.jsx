import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { PropagateLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className=" grid justify-center items-center h-screen">
            <PropagateLoader color="#36d7b7" size={20} />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/signIn' state={{ from: location }} replace>Sign In</Navigate>;

};

export default PrivateRoutes;