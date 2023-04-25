import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../UI/Loader/Loader";
import Layout from "../Layout/Layout";

const ProtectedRoute = () => {
    const location = useLocation();
    const userStatus = useSelector((state) => state.auth.status);

    // if (userStatus === null) return <Loader />;

    return userStatus ? (
        <Layout>
            <Outlet />
        </Layout>
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
