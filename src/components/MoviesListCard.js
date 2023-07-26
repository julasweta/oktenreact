import { Link } from "react-router-dom";
import { StarsRating } from "../components";

const MoviesListCard = ({ card }) => {
  return (
    <Link className="card" to={`/movie/${card.id}`}>
      <h3>{card.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.title}></img>
      <span className="lng">{card.original_language}</span>
      <StarsRating rating={card.vote_average} />
      <span className="lng">{card.vote_count}</span>
    </Link>
  );
};

export { MoviesListCard };
