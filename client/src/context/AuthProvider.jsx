import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  useEffect(() => {
    const subAuth = auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        setUser(user);
        localStorage.setItem("acc", user.accessToken);
        return;
      }
      setUser({});
      localStorage.removeItem("acc");
    });
    return () => {
      subAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
