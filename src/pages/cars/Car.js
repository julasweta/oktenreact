import React from 'react';


const Car = ({car, onDelete, onOpenChangeForm}) => {
  return (
    <div className="item">
      <h3>{ car.name}</h3>
      <span>{car.id}</span>
      <span>{car.brand}</span>
      <span>{car.price}</span>
      <span>{car.year}</span>
      
      <button onClick={()=>onDelete(car.id)}>Delete</button>
      <button onClick={()=>onOpenChangeForm(car)}>Change</button>
    </div>
  )
}

export default Car;
