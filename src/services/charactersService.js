
import { baseUrl, urls } from "../constants/urls";
import { apiService } from "./apiService";


const charactersService = {
    getAll: () => apiService.get(baseUrl+urls.character),
    getById: (url)=> apiService(url),
}

export {
    charactersService
}