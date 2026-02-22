import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

function ProtectedRoute({ isLoggedin, children }) {
  if (!isLoggedin) {
    <Navigate to=""/>;
  }
  return children;
}

export default ProtectedRoute;
