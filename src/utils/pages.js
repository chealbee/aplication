export function getTotalPages(limit, totalCount) {
   return Math.ceil(totalCount / limit);
}
