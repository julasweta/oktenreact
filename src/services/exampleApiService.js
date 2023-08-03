import axios from "axios";
import {exampleBaseUrl} from "../constants/urls";

const exampleApiService = axios.create({baseURL: exampleBaseUrl});

export {
    exampleApiService
}