import axios from "axios";

import {baseURL, baseURL_cars} from "../constants/Urls";

const apiService = axios.create({baseURL});

const apiService_car = axios.create({baseURL: baseURL_cars});

export {
    apiService,
    apiService_car
}