import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import Home from "./pages/Home";
import Login from "./pages/Login";
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
      {/* <Route element={<ProtectedRoute />}><Route path="/" exact element={<Home />} /></Route> */}
      <Route path="/login" exact element={<Login />} />
      <Route path="/*" exact element={<NotFound />} />
    </Routes>

  );
}

export default App;
