const authToken = process.env.REACT_APP_AUTH_TOKEN;

export const apiService = {
  //всі відео
  movies: async (page) => {
    console.log(page);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authToken,
      },
    };

    return fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, options)
      .then((response) => response.json())
      .then((response) => {
        return response.results;
      })
      .catch((err) => console.error(err));
  },


  genres: async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authToken,
      },
    };

    try {
      const response = await fetch("https://api.themoviedb.org/3/genre/movie/list", options);
      const data = await response.json();
      return data.genres;
    } catch (err) {
      console.error(err);
      return [];
    }
  },

  movie: async (id) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authToken,
      },
    };

    return fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },

  image: async (id) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: authToken,
      },
    };

    return fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },
};
