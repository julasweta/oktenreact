
import { urls } from "../constants/urls";
import { carsApiService } from "./carsApiService";

const carsService = {
    getAll: () => carsApiService.get(urls.owu.cars),
    addCar: (data) => carsApiService.post(urls.owu.cars, data),
    deleteCar: (id) => carsApiService.delete(urls.owu.cars+`/${id}`),
    changeCar: (data,id) => carsApiService.put(urls.owu.cars+`/${id}`, data),
}

export {
    carsService
}
