import React from "react";
import { Link } from "react-router-dom";

const MovieInfo = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movies">
      {movie && (
        <div className="movie">
          <h2>{movie.original_title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title}></img>
          <Link to={`/image/${movie.id}`} className="menu-button view">
            View all posters
          </Link>
          <span className="info">
            {" "}
            <b>Budget:</b> {movie.budget}
          </span>
          <span className="info">
            <b>Date release:</b> {movie.release_date}
          </span>
          <h5>Spoken Languages</h5>
          <ol>
            {movie.spoken_languages.map((item, index) => (
              <li key={index}>{item.english_name}</li>
            ))}
          </ol>
          <p className="overview">{movie.overview}</p>

          <Link to={movie.homepage} target="_blank" className="menu-button view">
            HomePage of Movie
          </Link>
          <div className="products">
            {movie.production_companies.map((item) => (
              <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.name} className="logo" key={item.id}></img>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { MovieInfo };
