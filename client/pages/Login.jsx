import React, { useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../src/context/AuthProvider";
const Login = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };
  useEffect(() => {
    if (user?.uid) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div>
      <Typography sx={{ margin: "20px 0" }}>Welcome to Note App</Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
