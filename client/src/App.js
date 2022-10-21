import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/HOC/ProtectedRoute"
import { getUser } from "./store/authActions";


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (

    <Routes>
      <Route element={<ProtectedRoute />}><Route exact path="/" element={<Home />} /></Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signuip" element={<Signup />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
