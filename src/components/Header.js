import React, { useEffect, useState } from "react";
import { apiService } from "../services/ApiService";
import { Link } from "react-router-dom";
import { UserInfo } from "./UserInfo";
import { GenreBadge } from "./GenreBadge";

const Header = ({ activeGenre, setActiveGenre }) => {
  const [genres, setGenres] = useState();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const axiosGet = async () => {
      setGenres(await apiService.genres());
    };
    axiosGet();
  }, []);

  return (
    <div className="header">
      <Link className="menu-button" to={`/`}>
        Home
      </Link>
      <div className="menu-button" onClick={() => setShowMenu(!showMenu)}>
        Genres
      </div>
      {showMenu && (
        <div className="genres">
          <Link className="genre" onClick={() => setActiveGenre(null)} to={`/`}>
            All
          </Link>
          {genres &&
            genres.map((genre) => (
              <GenreBadge genre={genre} key={genre.id} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
            ))}
        </div>
      )}
      <UserInfo />
    </div>
  );
};

export { Header };
