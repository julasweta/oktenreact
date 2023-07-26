import { Link } from "react-router-dom"

const GenreBadge = ({genre, setActiveGenre}) => {


  return (
    <Link className="genre" onClick={()=>setActiveGenre(genre.id)} to={`/`}>
     {genre.name}
    </Link>
  )
}

export  {GenreBadge}
