import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"

const ProtectedRoute = () => {

    const userStatus = useSelector(state => state.auth.status)

    if (userStatus === null) return <h1>Loading</h1>

    return (
        userStatus ? <Outlet /> : <Navigate to="/login" replace />
    )
}

export default ProtectedRoute