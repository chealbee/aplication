import React, { useState } from "react";
import cl from "./MyInput.module.css";

function MyInput({ ...props }) {
   return <input {...props} className={cl.input} />;
}

export default MyInput;
