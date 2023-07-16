import React from 'react'

const Car = ({ car, deleteCar }) => {


    return (
        <div className='car'>
            <div>id - {car && car.id}</div>
            <div>brand - {car && car.brand}</div>
            <div>price - {car && car.price}</div>
            <div>year - {car && car.year}</div>
            <button onClick={() => deleteCar(car.id)}> delete </button>

        </div>
    )
}

export default Car
