import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowed = false }) => {
  if (!allowed) {
    return <Navigate to="/error" replace state={{message:"You are not allowed to access this page, Change '.env' setting first."}} />;
  }

  return children;
};

export default PrivateRoute;
