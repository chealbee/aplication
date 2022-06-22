import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function AddForm({ add }) {
   const [inputValue, setInputValue] = useState({ title: "", body: "" });

   function cretenewPost(e) {
      let newPost = { ...inputValue, id: Date.now() };
      add(newPost);
      setInputValue({ title: "", body: "" });
   }

   return (
      <form action="#" onSubmit={e => e.preventDefault()}>
         <MyInput
            placeholder="заголовок"
            value={inputValue.title}
            onChange={e =>
               setInputValue({ ...inputValue, title: e.target.value })
            }
         />
         <MyInput
            placeholder="опис допису"
            value={inputValue.body}
            onChange={e =>
               setInputValue({ ...inputValue, body: e.target.value })
            }
         />
         <MyButton
            onClick={() => {
               cretenewPost();
            }}
         >
            Додати новий допис
         </MyButton>
      </form>
   );
}

export default AddForm;
