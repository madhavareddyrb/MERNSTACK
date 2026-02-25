import { Children } from "react";
import { Navigate, replace } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("userId");
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
