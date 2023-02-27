import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Confirmation from "./pages/Confirmation";
import UpdatePassword from "./pages/UpdatePassword";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/HOC/ProtectedRoute";

import { getUser } from "./store/authActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile/:userId" element={<Profile />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/confirmation/:token" element={<Confirmation />} />
            <Route exact path="/reset/:token" element={<UpdatePassword />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
