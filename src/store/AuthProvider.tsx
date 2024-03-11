import React, { createContext, useContext, useState } from "react";
import { loginUser } from "../services/auth";
import { User } from "../type/User";
import { AuthContextType } from "../type/AuthContextType";
import { useNavigate } from "react-router-dom";
import {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../config/axiosConfig";
import { usePreloader } from "./PreloaderProvider";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const preloader = usePreloader();

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("pia_dashboard_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (username: string, password: string) => {
    preloader.setShowPreloader(true);
    try {
      const userData = await loginUser(username, password);
      setUser(userData);
      localStorage.setItem("pia_dashboard_user", JSON.stringify(userData));
      setAuthorizationHeader(userData.token);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
    }
    preloader.setShowPreloader(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("pia_dashboard_user");
    removeAuthorizationHeader();
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
