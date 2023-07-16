import React from 'react';
import { useRef } from 'react';

const CarForm = ({ addCar, changeCar }) => {
    //change ref
    const id = useRef('');
    const brand = useRef('');
    const year = useRef('');
    const price = useRef('');

    // add ref
    const brandAdd = useRef('');
    const yearAdd = useRef('');
    const priceAdd = useRef('');


    const changeSubmit = (event) => {
        event.preventDefault();
        const iddRef = id?.current?.value;
        const brandRef = brand?.current?.value;
        const yeardRef = year?.current?.value;
        const priceRef = price?.current?.value;
        changeCar(iddRef, brandRef, yeardRef, priceRef);
    }

    const addSubmit = (event) => {
        event.preventDefault();

        const brandRef = brandAdd?.current?.value;
        const yeardRef = yearAdd?.current?.value;
        const priceRef = priceAdd?.current?.value;
        addCar(brandRef, yeardRef, priceRef);
    }

    return (

        <div className='cars-form'>
            {/* форма для змінни данних */}
            <form onSubmit={changeSubmit}>
                <h2>Змінити дані</h2>
                <label>
                    Id:
                    <input type="text" ref={id} />
                </label>
                <label>
                    Brand:
                    <input type="text" ref={brand} />
                </label>
                <label>
                    Year:
                    <input type="text" ref={year} />
                </label>
                <label>
                    Price:
                    <input type="text" ref={price} />
                </label>

                <button type='submit'>Змінити</button>
            </form>

            {/* форма для додавання данних */}
            <form onSubmit={addSubmit}>
                <h2>Додати машину</h2>
                <label>
                    Brand:
                    <input type="text" ref={brandAdd} />
                </label>
                <label>
                    Year:
                    <input type="text" ref={yearAdd} />
                </label>
                <label>
                    Price:
                    <input type="text" ref={priceAdd} />
                </label>

                <button type='submit'>Додати</button>
            </form>
        </div>

    )
}

export default CarForm

