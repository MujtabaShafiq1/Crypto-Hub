import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

const ProtectedRoute = () => {

    const location = useLocation();
    const userStatus = useSelector(state => state.auth.status)

    return (
        userStatus ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default ProtectedRoute