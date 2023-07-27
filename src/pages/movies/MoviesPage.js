
import '../../App.css';
import { MoviesList } from '../../components';


const MoviesPage = () => {

  return (
    <div className='container'>
      <div className='movies'>
        <MoviesList />
      </div>
    </div>
  );
};

export  {MoviesPage};
