import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Guest = () => {
  const isGuest = useAuth();
  return !isGuest ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default Guest;
