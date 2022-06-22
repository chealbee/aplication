import { useMemo } from "react";

export function usePagination(totalCount) {
   const pageArray = useMemo(() => {
      let arr = [];
      for (let i = 0; i < totalCount; i++) {
         arr.push(i + 1);
      }
      return arr;
   }, [totalCount]);
   return pageArray;
}
