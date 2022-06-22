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
               на даному сайті реалізована:
               <span className="about__span">по сторінкова навігація,</span>
               <span className="about__span">
                  фейкова перевірка чи користувач зареестрований,
               </span>
               <span className="about__span">
                  запит на сервер та отримання постів,
               </span>
               <span className="about__span">react transition group,</span>
               <span className="about__span">пагінація,</span>
               <span className="about__span">сортування ,</span>
               <span className="about__span">
                  пошук та так звана безкінечна сторінка
               </span>
            </p>
            <p className="about__text">
               для того щоб проті перевірку на реестрацію потрібно ввести user:
               <span className="about__login"> user</span> pasword:
               <span className="about__login"> userPass123</span>
            </p>
            <p className="about__text">
               використовувася компонентній підхід ,декомпозиція та кастомні
               хуки
            </p>
         </div>
      </>
   );
}

export default About;
