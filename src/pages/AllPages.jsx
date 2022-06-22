import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/UI/footer/Footer";
import Header from "../components/UI/header/Header";

function AllPages() {
   return (
      <div className="page">
         <Header />
         <div className="all">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}

export default AllPages;
