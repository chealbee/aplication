import React from "react";
import Post from "./Post";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Posts({ posts, del }) {
   if (posts.length) {
      return (
         <>
            <h5 className="notfound">всего постов: {posts.length}</h5>
            <TransitionGroup className="posts">
               {posts.map(ell => (
                  <CSSTransition key={ell.id} timeout={500} classNames="item">
                     <Post del={del} post={ell} />
                  </CSSTransition>
               ))}
            </TransitionGroup>
         </>
      );
   } else {
      return <h5 className="notfound">посты не найдены</h5>;
   }
}

export default Posts;
