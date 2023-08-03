import {apiService} from "./apiService";
import {urls} from "../constants";

const postsService = {
    getAll: () => apiService.get(urls.posts)
}

export {
    postsService
}