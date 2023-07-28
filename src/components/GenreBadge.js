import { useState } from "react"
import { Link } from "react-router-dom"

const GenreBadge = ({genre, setActiveGenre, activeBtn, setActiveBtn}) => {




 const onActive = () => {
  setActiveGenre(genre.id);
  setActiveBtn(genre.name);
 }
 console.log(activeBtn);

  return (
    <Link onClick={onActive} to={`/`} className={activeBtn===genre.name? 'red' : 'genre'}>
     {genre.name}
    </Link>
  )
}

export  {GenreBadge}
