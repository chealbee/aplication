import { useMemo } from "react";

export function useSortedPosts(posts, sort) {
   const sortedPosts = useMemo(() => {
      if (sort) {
         return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
      return posts;
   }, [posts, sort]);
   return sortedPosts;
}

export function useFilter(posts, sort, query) {
   let sortedPosts = useSortedPosts(posts, sort);
   const sortedAndSerch = useMemo(() => {
      return sortedPosts.filter(ell =>
         ell.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      );
   }, [sortedPosts, query]);
   return sortedAndSerch;
}
