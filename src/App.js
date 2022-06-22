import React, { useEffect, useState } from "react";
import "./styles/app.css";
import Rotes from "./components/Rotes";
import { Context } from "./context/loginContext";

function App() {
   useEffect(() => {
      if (localStorage.getItem("isLogin") === "true") {
         setLogin(true);
      } else {
         setLogin(false);
      }
      setLoaing(false);
   }, []);
   let [isLogin, setLogin] = useState(false);
   let [loaing, setLoaing] = useState(true);
   return (
      <>
         <Context.Provider value={{ isLogin, setLogin, loaing }}>
            <Rotes />
         </Context.Provider>
      </>
   );
}

export default App;
