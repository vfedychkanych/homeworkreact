const baseURL = 'https://jsonplaceholder.typicode.com'
const toDos = '/todos'
const comments = '/comments'
const albums = '/albums'
const posts = '/posts'

const urls = {
    toDos: toDos,
    comments: {
        all: comments,
        byId: (id) => `${comments}/${id}`
    },
    albums: albums,
    post: {
        all: posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}