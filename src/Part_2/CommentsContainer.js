import {CommentsForm} from "./CommentsForm";
import {Comments} from "./Comments";
import {useEffect, useState} from "react";
import {commentService} from "../services/CommentService";

const CommentsContainer = () => {
    const [comments, setComment] = useState([])
    useEffect(() => {
        commentService.getAll().then(({data})=> setComment(data))
    }, []);
    return (
        <div>
            <CommentsForm setComment={setComment}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};