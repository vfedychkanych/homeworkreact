import {apiService} from "./ApiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiService.get(urls.comments.all),
    getById: (id) => apiService.get(urls.comments.byId(id))
}
export {
    commentsService
}