import axios from 'axios';


export const apiService = {

  //запит на отримання всіх даних
  handleGet: async (url) => {
    try {
      const response = await axios.get(url && url );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  //запит на додавання
  handleAdd: async (data, url) => {
    try {
      const response = await axios.post(url && url  , data, {
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
  handleDelete: async (id, url) => {
    try {
      const response = await axios.delete(url && url+`/${id}`, {
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
  handleChange: async (data, url) => {
  
    try {
      const response = await axios.patch(url && url +`/${data.id}` , data, {
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