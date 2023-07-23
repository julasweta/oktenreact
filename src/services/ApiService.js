import axios from 'axios';


export const apiService = {

  //запит на отримання всіх даних
  handleGet: async (url) => {
    try {
      const response = await axios.get(url && url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },



};