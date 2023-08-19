import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { characterActions } from "../../redux/slices/charactersSlice";
import { Character } from "./Character";

const Characters = () => {
  const { episodeCharacters, characters } = useSelector((state) => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    episodeCharacters.map((item) => dispatch(characterActions.getById(item)));
  }, [episodeCharacters, dispatch]);

  return (
    <>
      <p> Кількість персонажів - {episodeCharacters.length}</p>
      
      <div className="items">
        {characters && characters.map((character, index) => <Character key={index} character={character} />)}
      </div>
    </>
  );
};

export { Characters };
