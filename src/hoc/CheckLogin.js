import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/loginContext";

function CheckLogin({ children }) {
   let { isLogin, setLogin, loaing } = useContext(Context);
   if (loaing) {
      return;
   }
   if (isLogin) {
      {
         return children;
      }
   }
   return <Navigate to="/login" replace />;
}

export default CheckLogin;
