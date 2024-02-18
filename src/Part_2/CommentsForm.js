import {useForm} from "react-hook-form";
import {commentService} from "../services/CommentService";

const CommentsForm = ({setComment}) => {
    const {register, reset, handleSubmit} = useForm()

    const save = (comment)=>{
        commentService.create(comment).then(({data}) => setComment(prev=> [...prev, data]) )
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'postId'} {...register('postId')}/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export {CommentsForm};