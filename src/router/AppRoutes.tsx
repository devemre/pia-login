import { Routes, Route, useNavigate } from "react-router-dom";
import { DashboardPage, LoginPage } from "../pages";
import { useAuth } from "../store/AuthProvider";
import { useEffect } from "react";

const AppRoutes = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <Routes>
      {!user && <Route path="/" element={<LoginPage />} />}
      {user && <Route path="/dashboard" element={<DashboardPage />} />}
    </Routes>
  );
};

export default AppRoutes;
