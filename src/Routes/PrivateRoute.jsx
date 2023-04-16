import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useContext(useContext);
  if (user) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoute;
