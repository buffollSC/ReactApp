import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const[fetchPostById, isLoadingPostById, postError] = useFetching(async () => {
        const response = await PostService.getIdPost(params.id);
        setPost(response.data)
    })
    const[fetchPostCom, isLoadingPostCom, errorCom] = useFetching(async () => {
        const responseComments = await PostService.getComPost(params.id);
        setComments(responseComments.data)
    })
    useEffect(() => {
        fetchPostById()
        fetchPostCom()
    }, [])
    return (
        <div style={{marginTop:'30px', padding:'15px', border: '2px solid silver', borderRadius: '10px'}}>
            <h1 style={{textAlign: 'center', marginBottom: '30px'}}>
                Перешли на пост {params.id}
            </h1>
            
            {isLoadingPostById
                ?   <Loader/>
                :   <div> 
                        <h1>Name: {post.title}</h1> 
                    </div>
            }
            <hr style={{marginTop:'15px', marginBottom: '15px'}}/>
            <h1>
                Комментарии:
            </h1>
            {isLoadingPostCom
                ?   <Loader/>
                :   <div> 
                        {comments.map(com =>
                            <div key={com.id}>
                                <h4 style={{marginTop: '15px'}}>{com.email}</h4>
                                <div>{com.body}</div>
                            </div>    
                        )}
                    </div>
            }
        </div>
        
    )
}
export default PostIdPage;