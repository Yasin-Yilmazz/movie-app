import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../pages/error/Error";
import Navbar from "../components/navbar/Navbar";
import MovieDetail from "../pages/movieDetail/MovieDetail";
import { AuthContext } from "../context/AuthContext";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  function PrivateRouter() {
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
