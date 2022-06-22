import React from "react";
import cl from "./MyModal.module.css";

function MyModal({ myModal, setMyModal, children }) {
   let clases = [cl.body];
   if (myModal) {
      clases.push(cl.active);
   }
   return (
      <div
         className={clases.join(" ")}
         onClick={() => {
            setMyModal(false);
         }}
      >
         <div className={cl.content} onClick={e => e.stopPropagation()}>
            {children}
            <button
               className="closebutton"
               onClick={() => {
                  setMyModal(false);
               }}
            >
               закрити модальное вікно
            </button>
         </div>
      </div>
   );
}

export default MyModal;
