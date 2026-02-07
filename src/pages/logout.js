import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./auth";
export const Logout = () => {
  const { logoutuser } = useAuth();
  useEffect(() => {
    logoutuser();
  }, [logoutuser]);
  return <Navigate to="/login"></Navigate>;
};
export default Logout;
