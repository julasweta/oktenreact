import { baseUrl, urls } from "../constants/urls";
import { apiService } from "./apiService";



const episodesService = {
    getAll: () => apiService.get(baseUrl+urls.episode),
    getOnPageAll: (page) => apiService.get(baseUrl+urls.episode+`?page=${page}`),
}

export {
    episodesService
}