import About from "../../../pages/about/About";
import Login from "../../../pages/login/Login";
import PostIdPage from "../../../pages/postIdPage/PostIdPage";
import Posts from "../../../pages/posts/Posts";
export const privateRouters = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
]
export const publicRouters = [
    {path: '/login', component: Login, exact: true},
]