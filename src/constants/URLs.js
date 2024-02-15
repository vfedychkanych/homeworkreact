const baseURL = 'https://jsonplaceholder.typicode.com'
const baseURLSpaceX = 'https://api.spacexdata.com'

const posts = '/posts'
const spaseX = '/v3/launches/'
const urls ={
    spaceX:{
        base: spaseX
    },
    posts: {
        base: posts,
        byID: (id) => `${posts}/${id}`
    }
}
export {
    baseURLSpaceX,
    baseURL,
    urls
}