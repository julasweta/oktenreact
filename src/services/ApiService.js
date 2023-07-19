import axios from 'axios';

const BASE_URL = 'http://owu.linkpc.net/carsAPI/v1';
const CARS = '/cars';

export const apiService = {

  //запит на отримання всіх машини
  handleGetCars: async () => {
    try {
      const response = await axios.get(`${BASE_URL}${CARS}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  //запит на додавання машини
  handleAddCars: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}${CARS}`, data, {
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

  // запит на видалення машини
  handleDeleteCars: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}${CARS}/${id}`, {
        headers: { 'accept': 'application/json' }
      });
      console.log('Response from handleAddCars:', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  // запит на зміну данних машини
  handleChangeCars: async (data) => {
    const changeDta = {
      "brand": data.brand,
      "price": +data.price,
      "year": +data.year
    }
    try {
      const response = await axios.patch(`${BASE_URL}${CARS}/${data.id}`, changeDta, {
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
