import React from 'react'

const Character = ({character}) => {

  return (
    <div className='item'>
      <h3>{character.name}</h3>
      <img alt='img' src={character.image}></img>
    </div>
  )
}

export  {Character}
