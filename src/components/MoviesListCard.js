import { Link } from "react-router-dom";
import { StarsRating } from "./StarsRating";

const MoviesListCard = ({ card }) => {
  const truncatedOverview =
    card.overview.length > 50
      ? card.overview.slice(0, 50) + "..."
      : card.overview;

  return (
    <Link  className="card" to={`/movie/${card.id}`}>
      <h3>{card.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.title} title={truncatedOverview}></img>
      <span className="lng">{card.original_language}</span>
      <StarsRating rating={card.vote_average} />
      <span className="lng">{card.vote_count}</span>
    </Link>
  );
};

export { MoviesListCard };
