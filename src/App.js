import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Request from "./pages/Request";
import NotFound from "./components/NotFound/NotFound";
import "./css/App.css";
import HomePage from "./pages/HomePage";
import WelcomePage from "./pages/WelcomePage";
import { isAuthenticated } from "./Auth/authUtils";

const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route
        path="/welcome"
        element={<PrivateRoute element={<WelcomePage />} />}
      />
      <Route
        path="/salaries"
        element={<PrivateRoute element={<Request />} />}
      />
    </Routes>
  );
}

export default App;
