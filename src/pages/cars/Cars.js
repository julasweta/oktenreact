import React from 'react'
import Car from './Car'

const Cars = ({cars, onDelete, onOpenChangeForm}) => {

    return (
      <div className='items'>
        {cars && cars.map(car => <Car car={car} key={car.id} onDelete={onDelete} onOpenChangeForm={onOpenChangeForm} />)}
      </div>
    )

}

export default Cars

