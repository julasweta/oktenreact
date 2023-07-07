import React from 'react'

function Ship({ship}) {
  return (
    <div className='post'>
      <h2>{ship.mission_name}</h2>
      <span>Year: {ship.launch_year}</span>
      <img src={ship.links.mission_patch_small} alt={ship.mission_name}/>
    </div>
  )
}

export default Ship
