import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/PostService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{id}} = useLocation();
    const [post, setPost] = useState([])
    useEffect(() => {
        postService.getById(id).then(({data}) => setPost(data))
    }, [id]);
    return (
        <div>
            <Post post={post}/>
            <hr/>
        </div>
    );
};

export {Posts};