
import { baseUrl, urls } from "../constants/urls";
import { apiService } from "./apiService";


const charactersService = {
    getAll: () => apiService.get(baseUrl+urls.character),
    getById: (url)=> apiService(url),
   /*  addCar: (data) => exampleApiService.post(urls.owu.cars, data),
    deleteCar: (id) => exampleApiService.delete(urls.owu.cars + `/${id}`),
    changeCar: (data, id) => exampleService.put(urls.owu.cars + `/${id}`, data), */
}

export {
    charactersService
}