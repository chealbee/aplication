import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/loginContext";

function IsLogin({ children }) {
   let { isLogin, setLogin } = useContext(Context);
   if (!isLogin) {
      {
         return children;
      }
   }
   return <Navigate to="/about" replace />;
}

export default IsLogin;
