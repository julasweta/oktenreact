import React, { useEffect, useState } from 'react';
import Car from './Car';
import CarForm from './CarForm';


const Cars = () => {
    const [cars, setCars] = useState();

    const getCar = async () => {
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
                method: 'GET'

            });
            const data = await response.json();
            setCars(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCar();
    }, [])

    const addCar = async ( brand, year,price) => {
        console.log(brand);
        console.log(year);
        console.log(price);
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   
                    "brand": brand,
                    "price": +price,
                    "year": +year
                })
            });
            const data = await response.json();
            console.log(data);
            getCar();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteCar = async (id) => {
        try {
            const response = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                }
            });
            const data = await response.status;
            console.log(data);
            getCar();
        } catch (error) {
            console.error(error);
        }
    };

    const changeCar = async (id, brand, year,price) => {
        console.log(id);
        try {
            const response = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({
                    "brand": brand,
                    "price": price,
                    "year": year
                })
            });
            const data = await response.json();
            console.log(data);
            getCar();
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='cars'>
          <CarForm addCar={addCar} changeCar={changeCar}/>
            < Car />
            {cars && cars.map(car => <Car car={car} key={car.id} deleteCar={deleteCar} />)}
        </div>
    )
}

export default Cars
