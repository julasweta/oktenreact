
import { urls } from "../constants";
import { exampleApiService } from "./exampleApiService";


//  в функцію передаємо дані, які нам потрібно для створення повної адреси, без базової, базова в exampleApiService

/*
// Приклад використання на сторінці

             carsService.getAll().then(({ data }) => dispatch(carsActions.setCars(data)));
// Другий приклад

    carsService.changeCar(data2, car[0].id).then(({ data }) => {
            dispatch(carsActions.deleteTriger())
            dispatch(carsActions.setShowForm('add'))
        }) 

  */

const exampleService = {
    getAll: () => exampleApiService.get(urls.owu.cars),
    addCar: (data) => exampleApiService.post(urls.owu.cars, data),
    deleteCar: (id) => exampleApiService.delete(urls.owu.cars + `/${id}`),
    changeCar: (data, id) => exampleService.put(urls.owu.cars + `/${id}`, data),
}

export {
    exampleService
}