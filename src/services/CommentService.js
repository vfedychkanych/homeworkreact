import {apiService} from "./ApiService";
import {urls} from "../constants/Urls";

const commentService = {
    getAll:() =>  apiService.get(urls.comments),
    create:(data) =>  apiService.post(urls.comments, data)
}
export {
    commentService
}