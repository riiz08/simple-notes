import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const Authenticated = () => {
  const isLogin = useAuth();
  return isLogin ? <Outlet /> : <Navigate to="/" replace />;
};
