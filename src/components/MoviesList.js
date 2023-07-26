import React, { useEffect, useState } from 'react';
import { apiService } from '../services/ApiService';
import {MoviesListCard} from '../components';

const MoviesList = ({activeGenre}) => {
  const [movies, setMovies] = useState();

  useEffect(()=>{
      const axiosGet = async () => {
        const allMovies = await apiService.movies();
        const filterMovies = allMovies.filter(item=> item.genre_ids.includes(activeGenre))

          setMovies(activeGenre? filterMovies : allMovies);
      };
      axiosGet();
  },[activeGenre])




  return (
    <div className='cards'>
    {movies && movies.map(card=><MoviesListCard card={card} key={card.id}/>)}
    </div>
  )
}

export  {MoviesList};
