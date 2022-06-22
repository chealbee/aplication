import React, { useContext } from "react";
import { Context } from "../../../context/loginContext";
import CustomLInk from "../link/CustomLInk";

function Header() {
   let { isLogin, SetLogin } = useContext(Context);
   return (
      <header className="header">
         <div className="wraper wraper__links">
            <div>
               {!isLogin && <CustomLInk to="/login">Login</CustomLInk>}

               <CustomLInk to="/about">about</CustomLInk>
               <CustomLInk to="/">main</CustomLInk>
               <CustomLInk to="/infinite">infinite</CustomLInk>
               <CustomLInk to="/add">add Posts</CustomLInk>
            </div>
            {isLogin && (
               <CustomLInk
                  style={{ opacity: 0.4 }}
                  onClick={() => {
                     localStorage.removeItem("isLogin");
                     SetLogin(false);
                  }}
                  to="/login"
               >
                  logout
               </CustomLInk>
            )}
         </div>
      </header>
   );
}

export default Header;
