import React from "react";
import { usePagination } from "../../../hooks/usePagination";

function Pagination({ setPage, page, totalPages }) {
   const pageArray = usePagination(totalPages);
   return (
      <>
         {pageArray.map(ell => (
            <button
               key={ell}
               onClick={() => setPage(ell)}
               className={
                  page === ell ? "pagination pagination__active" : "pagination"
               }
            >
               {ell}
            </button>
         ))}
      </>
   );
}

export default Pagination;
