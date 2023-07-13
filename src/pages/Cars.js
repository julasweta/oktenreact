import React from 'react';

const Cars = () => {
    const addCar = async () => {
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "brand": "string",
                    "price": 1000000,
                    "year": 2023
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteCar = async () => {
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars/4', {
                method: 'DELETE',
                headers: {
                    accept: "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const changeCar = async () => {
        try {
            const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars/2', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "brand": "bmv",
                    "price": 1700000,
                    "year": 2023
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div className='cars'>
            Cars
            <br/>
            <button onClick={() => addCar()}>add car</button>
            <br/>
            <button onClick={() => deleteCar()}>deleteCar</button>
            <br/>
            <button onClick={() => changeCar()}>changeCarCar</button>
        </div>
    )
}

export default Cars
