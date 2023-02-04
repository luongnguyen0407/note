import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops</h1>
      <h3>{error.statusText || error.message}</h3>
    </div>
  );
};

export default ErrorPage;
