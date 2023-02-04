import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.uid) {
      navigate("/login");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <Outlet />;
};

export default PrivateRoute;
