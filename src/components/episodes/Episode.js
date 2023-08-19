import React from "react";
import { useDispatch} from "react-redux";
import { characterActions } from "../../redux/slices/charactersSlice";
import { Link } from "react-router-dom";
import { urls } from "../../constants/urls";

const Episode = ({ episode }) => {
  const dispatch = useDispatch();

  const onShowCharacters = (characters, name) => {
    dispatch(characterActions.setEpisodeCharacters(characters));
    dispatch(characterActions.setEpisodeName(name));
  };

  return (
    <div className="item">
      <h3>{episode.name}</h3>
      <p>episode.id : {episode.id}</p>
      <p>{episode.episode}</p>
      <Link to={urls.characters}>
        {" "}
        <button onClick={() => onShowCharacters(episode.characters, episode.name)}>Показати персонажів</button>
      </Link>
    </div>
  );
};

export { Episode };
