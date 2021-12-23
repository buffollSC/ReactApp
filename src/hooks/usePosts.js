import {useMemo} from "react";

//Сортировка постов
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("Method work");
        if (sort) {
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      },[sort, posts])

      return sortedPosts;
}
  //Сортировка и поиск постов
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      }, [query,sortedPosts])

      return sortedAndSearchedPosts;
}