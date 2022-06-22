import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({ setfilter, filter }) {
   return (
      <>
         <MyInput
            value={filter.query}
            onChange={e => setfilter({ ...filter, query: e.target.value })}
            placeholder="пошук"
         />
         <MySelect
            value={filter.sort}
            onChange={e => setfilter({ ...filter, sort: e })}
            options={[
               { value: "body", text: "опису" },
               { value: "title", text: "заголовку" },
            ]}
         />
      </>
   );
}

export default PostFilter;
