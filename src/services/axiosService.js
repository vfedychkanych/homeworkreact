import axios from "axios";
import {baseURLSpaceX, baseURL} from "../constants/URLs";

const axiosService = axios.create({baseURL})
const axiosServiceSpaceX = axios.create({baseURLSpaceX})

export {
    axiosService,
    axiosServiceSpaceX
}