import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return <button className="btn loading">loading</button>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" replace={true}></Navigate>;
};

export default PrivateRoute;
