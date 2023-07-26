import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from '../../services/ApiService';
import { MovieInfo } from '../../components';

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const allMovie = await apiService.movie(params.id);
      setMovie(allMovie);
    };
    fetchMovie();
  }, [params.id])

 


  return (
    <div className='container'>
      <MovieInfo movie={movie} />
    </div>
  );
};

export { MoviePage};



