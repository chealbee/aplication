import React, { useContext, useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { Context } from "../context/loginContext";

function Login() {
   let [values, setValues] = useState({ user: "", pasword: "" });
   let { isLogin, setLogin, loaing } = useContext(Context);
   let [err, setErr] = useState("");

   function getUser(e) {
      setValues({ ...values, user: e.target.value });
   }
   function getPasword(e) {
      setValues({ ...values, pasword: e.target.value });
   }

   function formSubmit(e) {
      e.preventDefault();
      if (values.user === "user" && values.pasword === "userPass123") {
         setLogin(true);
         setErr("");
         localStorage.setItem("isLogin", "true");
      } else {
         setErr("перевірте правельність ведення данних");
      }
   }

   return (
      <div className="wraper__login">
         <div className="login__content">
            <form action="#" onSubmit={formSubmit}>
               <MyInput
                  placeholder="user"
                  value={values.user}
                  onChange={getUser}
               />
               <MyInput
                  placeholder="pasword"
                  value={values.pasword}
                  onChange={getPasword}
               />
               <MyButton>війти</MyButton>
            </form>
            {err && <div className="error error_smal">{err}</div>}
         </div>
      </div>
   );
}

export default Login;
