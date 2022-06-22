import React, { useState } from "react";
import Posts from "../components/Posts";
import "../styles/app.css";
import MyModal from "../components/UI/modal/MyModal";
import AddForm from "../components/AddForm";

function AddPosts() {
   const [posts, setPosts] = useState([]);
   const [myModal, setMyModal] = useState(false);

   function addNewPost(newPost) {
      setPosts([...posts, newPost]);
      setMyModal(false);
   }

   function deletePost(post) {
      setPosts(posts.filter(ell => ell.id !== post.id));
   }

   return (
      <div className="wraper centre">
         <button className="closebutton" onClick={() => setMyModal(true)}>
            добавить посты
         </button>
         <MyModal myModal={myModal} setMyModal={setMyModal}>
            <AddForm add={addNewPost} />
         </MyModal>
         {posts.length ? (
            <Posts del={deletePost} posts={posts} />
         ) : (
            <h5 className="notfound">Додайте дописи</h5>
         )}
      </div>
   );
}

export default AddPosts;
