import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "@mui/system";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./firebase/config";
import router from "../router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
