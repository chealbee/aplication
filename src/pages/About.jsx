import React from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import Header from "../components/UI/header/Header";

function About() {
   return (
      <>
         <div className="wraper">
            <h1 className="about__title">
               Про стек технологій які використані в процесі розробки сайту
            </h1>
            <p className="about__text">
               this site implements:
               <span className="about__span">page navigation,</span>
               <span className="about__span">
                  fake check whether the user is registered,
               </span>
               <span className="about__span">
                  requesting the server and receiving posts,
               </span>
               <span className="about__span">react transition group,</span>
               <span className="about__span">pagination,</span>
               <span className="about__span">sorting,</span>
               <span className="about__span">
                  search and the so-called infinite page
               </span>
            </p>
            <p className="about__text">
               in order to check the registration, you need to enter user:
               <span className="about__login"> user</span> pasword:
               <span className="about__login"> userPass123</span>
            </p>
         </div>
      </>
   );
}

export default About;
