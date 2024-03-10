import { Routes, Route, useNavigate } from "react-router-dom";
import { DashboardPage, LoginPage } from "../pages";
import { useAuth } from "../store/AuthProvider";
import { useEffect } from "react";

const AppRoutes = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [auth.user]);
  return (
    <Routes>
      {!auth.user && <Route path="/" element={<LoginPage />} />}
      {auth.user && <Route path="/dashboard" element={<DashboardPage />} />}
    </Routes>
  );
};

export default AppRoutes;
