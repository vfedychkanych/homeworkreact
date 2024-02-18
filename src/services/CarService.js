import {apiService, apiService_car} from "./ApiService";
import {urls} from "../constants/Urls";

const carService = {
    getAll: () => apiService_car.get(urls.cars.base),
    create: (data) => apiService_car.post(urls.cars.base, data),
    updateById: (id, data) => apiService_car.put(urls.cars.byId(id), data),
    deleteById: (id) => apiService_car.delete(urls.cars.byId(id))
}
export {
    carService
}