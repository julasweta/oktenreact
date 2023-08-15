
import { urls } from "../constants/urls";
import { Car } from "../pages/Cars";
import { carsApiService } from "./carsApiService";

const carsService = {
    getAll: () => carsApiService.get(urls.owu.cars),
    addCar: (data:Partial<Car>) => carsApiService.post(urls.owu.cars, data),
    deleteCar: (id:number) => carsApiService.delete(urls.owu.cars+`/${id}`),
    changeCar: (data:Partial<Car>,id:number) => carsApiService.put(urls.owu.cars+`/${id}`, data),
}

export {
    carsService
}
