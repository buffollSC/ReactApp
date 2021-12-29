//hook for the appearance of an endless tape
import { useEffect, useRef } from "react";

const useObserver = (ref, isLoadingPosts, lastPage, setPage) => {
    const observer = useRef();
    useEffect(() => {
        if (isLoadingPosts) {
            return;
        }    
        if (observer.current) {
            observer.current.disconnect();
        } 
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && lastPage) {
                setPage();
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current)
    }, [isLoadingPosts])
}
export default useObserver;