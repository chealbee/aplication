import React from "react";
import cl from "./Mybutton.module.css";

function MyButton({ children, ...props }) {
   return (
      <button className={cl.button} {...props}>
         {children}
      </button>
   );
}

export default MyButton;
