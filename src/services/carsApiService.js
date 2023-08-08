import axios from "axios";
import {owuBaseURl} from "../constants/urls";

const carsApiService = axios.create({baseURL: owuBaseURl});

export {
    carsApiService
}