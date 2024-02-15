import {axiosServiceSpaceX} from "./axiosService";
import {urls} from "../constants/URLs";

const spaceXService = {

    getAll: () => axiosServiceSpaceX(urls.spaceX.base)
}
export {
    spaceXService
}