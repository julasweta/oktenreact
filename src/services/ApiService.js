import axios from 'axios';

const BASE_URL = 'http://owu.linkpc.net/carsAPI/v1';
const CARS = '/cars';

export const apiService = {

  //запит на отримання всіх даних
  handleGetCars: async (url) => {
    try {
      const response = await axios.get(url? url :  `${BASE_URL}${CARS}` );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  //запит на додавання
  handleAddCars: async (data, url) => {
    try {
      const response = await axios.post(url? url :  `${BASE_URL}${CARS}` , data, {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        }
      });
      console.log('Response from handleAddCars:', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  // запит на видалення
  handleDeleteCars: async (id, url) => {
    try {
      const response = await axios.delete(url? url+`/${id}` :  `${BASE_URL}${CARS}/${id}`, {
        headers: { 'accept': 'application/json' }
      });
      console.log('Response from handleAddCars:', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  // запит на зміну данних
  handleChangeCars: async (data, url) => {
    const changeDta = {
      "brand": data.brand,
      "price": +data.price,
      "year": +data.year
    }
    try {
      const response = await axios.patch(url? url +`/${data.id}` : `${BASE_URL}${CARS}/${data.id}`, changeDta, {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        }
      });
      console.log('Response from handleAddCars:', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

};
