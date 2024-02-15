import {Post} from "./Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../../services/axiosService";
import {urls} from "../../constants/URLs";
import {postsService} from "../../services/postsService";
import {PostDetails} from "./PostDetails";
import css from "./Posts.module.css"

const Posts = () => {
const [posts, setPosts] = useState([]);
const [postDetails, setPostDetails] = useState(null);
    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost     = (post) => {
        setPostDetails(post)
    }
    return (
        <div className={css.post}>
            <div>
            {posts.map(post => <Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>
            <hr/>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};