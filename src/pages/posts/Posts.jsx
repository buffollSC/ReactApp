import React, { useEffect, useRef, useState } from 'react';
import { usePosts } from '../../hooks/usePosts';
import PostFilter from '../../components/PostFilter';
import PostForm from '../../components/PostForm';
import PostList from '../../components/PostList';
import MyButton from '../../components/UI/button/MyButton';
import CreatePost from '../../components/UI/myModelsWindows/CreatePost';
import PostService from '../../API/PostService';
import Loader from '../../components/UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPageCount } from '../../utils/GetPageCount';
import useObserver from '../../hooks/useObserver';
import classes from './Posts.module.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    
    const [fetchPosts, isLoadingPosts, postError] = useFetching(async () => {
        const response = await PostService.getPosts(limit, page)
        const totalCount = response.headers['x-total-count']
        setPosts([...posts, ...response.data]);
        setTotalPages(getPageCount(totalCount, limit))
    })
    const lastElement = useRef();
    
    useObserver (
        lastElement, 
        isLoadingPosts, 
        page < totalPages, 
        () => {setPage(page + 1)}
    )

    //loading posts
    useEffect(()=> {
        fetchPosts()
    },[page]) 
    
    //Create new post
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    //Remove post
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    
    return (
        <div className = {classes.Posts}>
            <MyButton style = {{marginBottom: '15px', marginTop: "30px", float:'left'}} onClick = {fetchPosts}>
                ?????????????????? ???????????? 
            </MyButton>
            <MyButton style = {{marginBottom: '15px', marginTop: '30px', float: 'right'}} onClick = {() => setModal(true)}>
                ?????????????? ????????
            </MyButton>
            <CreatePost visible = {modal} setVisible = {setModal}>
                <PostForm create = {createPost}/>
            </CreatePost>
            <hr className = {classes.hr}/>  
            <PostFilter
                filter = {filter}
                setFilter = {setFilter}
            />
            {postError && 
                <h1>
                    ?????????????????? ????????????: {postError}
                </h1>
            }
            <PostList 
                remove = {removePost} 
                posts = {sortedAndSearchedPosts} 
                title = "List posts"
            />
            <div ref = {lastElement}/>
            {isLoadingPosts &&
                <div className = {classes.loader}>
                    <Loader/>
                </div>
            }
        </div>
    );
}
export default Posts;
