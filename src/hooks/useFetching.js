import { useState } from "react";

export function useFetching(callback) {
   const [loading, setLoading] = useState(false);
   const [err, setErr] = useState("");

   async function fetching() {
      try {
         setLoading(true);
         await callback();
      } catch (e) {
         setErr(e);
      } finally {
         setLoading(false);
      }
   }
   return [fetching, loading, err];
}
