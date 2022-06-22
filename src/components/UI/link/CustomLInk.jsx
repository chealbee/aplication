import React from "react";
import { Link, useMatch } from "react-router-dom";

function CustomLInk({ children, to, ...props }) {
   let isActive = useMatch(to);
   let linkClass = isActive ? "header__link active__link" : "header__link";
   return (
      <Link to={to} {...props} className={linkClass}>
         {children}
      </Link>
   );
}

export default CustomLInk;
