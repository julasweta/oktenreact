
import '../../App.css';
import { useOutletContext } from "react-router-dom";
import { MoviesList } from '../../components';


const MoviesPage = () => {
  const [activeGenre, setActiveGenre] = useOutletContext();

  return (
    <div className='container'>
      <div className='movies'>
        <MoviesList activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      </div>
    </div>
  );
};

export  {MoviesPage};
