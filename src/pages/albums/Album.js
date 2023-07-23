import React from 'react'

const Album = ({album}) => {
  return (
    <div className='item'> 
    <h4>{album.name}</h4>
    <span>{album.email}</span>
    <p>{album.body}</p>
    </div>
  )
}

export default Album
