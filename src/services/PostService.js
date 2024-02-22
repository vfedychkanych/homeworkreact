import {apiService} from "./ApiService";
import {urls} from "../constants/urls";

const postService = {
    getAll: () => apiService.get(urls.post.all),
    getById: (id) => apiService.get(urls.post.byId(id))
}
export {
    postService
}