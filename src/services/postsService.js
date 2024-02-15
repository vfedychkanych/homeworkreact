import {axiosService} from "./axiosService";
import {urls} from "../constants/URLs";

const postsService = {
    getAll: () => axiosService(urls.posts.base),
    getById: (id) => axiosService(urls.posts.byID(id))
}

export {
    postsService
}