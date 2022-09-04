import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../store/store";

interface RequireAuthArgs {
  children: JSX.Element,
  redirectTo: string,
}

const RequireAuth = ({children, redirectTo}: RequireAuthArgs): JSX.Element => {
  const authStatus = useSelector((state: RootState) => state.user.authStatus);

  return authStatus
    ? children
    : <Navigate to={redirectTo} />;
}

export default RequireAuth;