import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, token } = useContext(AppContext);

  // 1. If not logged in at all, go to login
  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  // 2. If a specific role is required (like 'admin') but the user doesn't have it
  if (allowedRole && user.role !== allowedRole) {
    // If a student tries to enter /admin, send them to their dashboard
    return <Navigate to="/dashboard" replace />;
  }

  // 3. If everything is fine, show the page
  return children;
};

export default ProtectedRoute;