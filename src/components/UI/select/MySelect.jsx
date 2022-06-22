import React, { useState } from "react";
import cl from "./MySelect.module.css";

function MySelect({ options, value, onChange }) {
   return (
      <div className={cl.selectBody}>
         <h5 className={cl.selectfor}>Сортувати по</h5>
         <select
            className={cl.select}
            value={value}
            onChange={e => onChange(e.target.value)}
         >
            {options.map(ell => (
               <option key={ell.value} value={ell.value}>
                  {ell.text}
               </option>
            ))}
         </select>
      </div>
   );
}

export default MySelect;
