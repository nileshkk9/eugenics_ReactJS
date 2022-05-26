import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "./auth";

const PrivateRoute = (props) => {

  return auth.isAuthenticated() ? <Outlet /> : <Navigate
    to={{
      pathname: "/",
      state: {
        from: props.location
      }
    }}
  />
};
export default PrivateRoute;