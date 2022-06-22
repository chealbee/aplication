import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckLogin from "../hoc/CheckLogin";
import IsLogin from "../hoc/IsLogin";
import About from "../pages/About";
import AddPosts from "../pages/AddPosts";
import AllPages from "../pages/AllPages";
import Infinite from "../pages/Infinite";

import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";

function Rotes() {
   return (
      <Routes>
         <Route path="/" element={<AllPages />}>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route
               index
               element={
                  <CheckLogin>
                     <MainPage />
                  </CheckLogin>
               }
            ></Route>
            <Route
               path="infinite"
               element={
                  <CheckLogin>
                     <Infinite />
                  </CheckLogin>
               }
            ></Route>
            <Route
               path="add"
               element={
                  <CheckLogin>
                     <AddPosts />
                  </CheckLogin>
               }
            ></Route>
            <Route
               path="login"
               element={
                  <IsLogin>
                     <Login />
                  </IsLogin>
               }
            ></Route>
         </Route>
      </Routes>
   );
}

export default Rotes;
