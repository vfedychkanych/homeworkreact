const baseURL = 'https://jsonplaceholder.typicode.com'
const baseURL_cars = 'http://owu.linkpc.net/carsAPI/v1'

const users = '/users'

const comments = '/comments'

const cars = '/cars'

const urls = {
    users,
    comments,
    cars: {
        base: cars,
        byId: (id)=> `${cars}/${id}`
    }
}
export {
    baseURL,
    urls,
    baseURL_cars
}