const Post = ({post, getCurrentPost}) => {
    const {id, title} = post
    return (
        <div>
            <div>post: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => getCurrentPost(post)}>Details</button>
        </div>
    );
};

export {Post};