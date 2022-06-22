import React from "react";
import cl from "../styles/Posts.module.css";

function Post({ post, del }) {
   return (
      <div className={cl.post}>
         <div className={cl.content}>
            <div className={cl.img}></div>
            <h3 className={cl.title}>{post.title}</h3>
            <p className={cl.body}>{post.body}</p>
         </div>
         <button onClick={() => del(post)} className={cl.button}>
            удалить
         </button>
      </div>
   );
}

export default Post;
