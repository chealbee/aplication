import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import "../styles/app.css";
import { useFilter } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import MyModal from "../components/UI/modal/MyModal";
import AddForm from "../components/AddForm";
import PostFilter from "../components/PostFilter";
import Pagination from "../components/UI/pagination/Pagination";
import PostsService from "../API/PostService";
import { getTotalPages } from "../utils/pages";

function MainPage() {
   const [posts, setPosts] = useState([]);
   const [filter, setfilter] = useState({ sort: "", query: "" });
   const [myModal, setMyModal] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);

   const sortedAndSerch = useFilter(posts, filter.sort, filter.query);
   useEffect(() => {
      fechPosts();
   }, [page]);

   const [fechPosts, isLoading, error] = useFetching(async () => {
      const respons = await PostsService.getAll(limit, page);
      setPosts(respons.data);
      let total = respons.headers["x-total-count"];
      setTotalPages(getTotalPages(limit, total));
   });

   function addNewPost(newPost) {
      setPosts([...posts, newPost]);
      setMyModal(false);
   }

   function deletePost(post) {
      setPosts(posts.filter(ell => ell.id !== post.id));
   }

   return (
      <div className={"wraper"}>
         <button className="closebutton" onClick={() => setMyModal(true)}>
            відкрити модальне вікно
         </button>
         <MyModal myModal={myModal} setMyModal={setMyModal}>
            <AddForm add={addNewPost} />
         </MyModal>
         <PostFilter filter={filter} setfilter={setfilter} />

         {isLoading ? (
            <div className="loading">завантаженя...</div>
         ) : (
            <Posts del={deletePost} posts={sortedAndSerch} />
         )}
         {error && <div className="error">error</div>}
         <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      </div>
   );
}

export default MainPage;
