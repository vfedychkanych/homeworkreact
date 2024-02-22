import {apiService} from "./ApiService";
import {urls} from "../constants/urls";

const toDosService = {
    getAll: () => apiService.get(urls.toDos)
}
export {
    toDosService
}