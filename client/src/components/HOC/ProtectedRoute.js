import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"

const ProtectedRoute = () => {

    const location = useLocation();
    const userStatus = useSelector(state => state.auth.status)

    if(userStatus === null) return <h1>Loading</h1>

    return (
        userStatus ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default ProtectedRoute