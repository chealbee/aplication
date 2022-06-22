import React, { useEffect, useRef, useState } from "react";
import Posts from "../components/Posts";
import "../styles/app.css";
import { useFilter } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import Pagination from "../components/UI/pagination/Pagination";
import PostsService from "../API/PostService";
import { getTotalPages } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";

function MainPage() {
   const [posts, setPosts] = useState([]);
   const [filter, setfilter] = useState({ sort: "", query: "" });
   const [myModal, setMyModal] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const sortedAndSerch = useFilter(posts, filter.sort, filter.query);

   let lastElement = useRef();

   useEffect(() => {
      fechPosts();
   }, [page]);

   const [fechPosts, isLoading, error] = useFetching(async () => {
      const respons = await PostsService.getAll(limit, page);
      setPosts([...posts, ...respons.data]);
      let total = respons.headers["x-total-count"];
      setTotalPages(getTotalPages(limit, total));
   });

   function deletePost(post) {
      setPosts(posts.filter(ell => ell.id !== post.id));
   }
   useObserver(lastElement, isLoading, page <= totalPages, () =>
      setPage(page + 1),
   );

   return (
      <div className={"wraper"}>
         <Posts del={deletePost} posts={sortedAndSerch} />
         {isLoading && <div className="loading">завантаженя...</div>}
         {error && <div className="error">error</div>}
         <div ref={lastElement} style={{ height: 20 }}></div>
      </div>
   );
}

export default MainPage;
