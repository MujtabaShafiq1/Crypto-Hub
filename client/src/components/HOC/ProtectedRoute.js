import { useSelector } from 'react-redux'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = () => {

    const location = useLocation()
    const user = useSelector((state) => state.auth.user)

    return (
        user.status ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default ProtectedRoute;