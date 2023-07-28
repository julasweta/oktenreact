import React, { useEffect, useState } from "react";
import { apiService } from "../services/ApiService";
import { MoviesListCard } from "../components";
import { useOutletContext } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre, page, setPage] = useOutletContext();


  useEffect(() => {
    const axiosGet = async () => {
      const allMovies = await apiService.movies(page, activeGenre);
      setMovies(allMovies);
    };
    axiosGet();
  }, [activeGenre, page]);

  const pageRequr = (page) => {
    if (page === 1) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <div className="pages">
        <button onClick={() => pageRequr(page) && setPage(page - 1)} className="menu-button page_btn">
          <p>{page - 1}</p>
          {`<<<`} Prev page
        </button>

        <button className="menu-button page_btn">Page: {page}</button>
        <button onClick={() => setPage(page + 1)} className="menu-button page_btn">
          {page + 1} <p>Next page {`>>>`}</p>
        </button>
      </div>

      <TransitionGroup className="cards">
        {movies.map((movie) => (
          <CSSTransition key={movie.id} timeout={300} classNames="fade">
            <MoviesListCard card={movie} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export { MoviesList };
