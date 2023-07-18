import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

const Endpoints = {
  USERS: '/users'
}

export const apiService = {  
    handleGetUsers:  (data) => {
    axios.get(Endpoints.USERS)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  handleAddUsers:  (data) => {
    axios.post(Endpoints.USERS, {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

}