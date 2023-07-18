import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

const Endpoints = {
  USERS: '/users'
}

export const apiService = {
  handleGetUsers: async (data) => {
    try {
      const response = await instance.get(Endpoints.USERS);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  handleAddUsers: (data) => {
    axios.post(Endpoints.USERS, {
      name: 'Fred',
      username: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

}