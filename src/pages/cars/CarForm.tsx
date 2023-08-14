import React, { useRef, FormEvent } from "react";

interface CarFormProps {
  addCar: (brand: string, year: number, price: number) => void;
  changeCar: (id: number, brand: string, year: number, price: number) => void;
}

const CarForm: React.FC<CarFormProps> = ({ addCar, changeCar }) => {
  const id = useRef<HTMLInputElement | null>(null);
  const brand = useRef<HTMLInputElement | null>(null);
  const year = useRef<HTMLInputElement | null>(null);
  const price = useRef<HTMLInputElement | null>(null);

  const brandAdd = useRef<HTMLInputElement | null>(null);
  const yearAdd = useRef<HTMLInputElement | null>(null);
  const priceAdd = useRef<HTMLInputElement | null>(null);

  const changeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const iddRef = id.current?.value || "";
    const brandRef = brand.current?.value || "";
    const yeardRef = year.current?.value || "";
    const priceRef = price.current?.value || "";
    changeCar(Number(iddRef), brandRef, Number(yeardRef), Number(priceRef));
  };

  const addSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const brandRef = brandAdd.current?.value || "";
    const yeardRef = yearAdd.current?.value || "";
    const priceRef = priceAdd.current?.value || "";
    addCar(brandRef, Number(yeardRef), Number(priceRef));
  };

  return (
    <div className="cars-form">
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

        <button type="submit">Змінити</button>
      </form>

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

        <button type="submit">Додати</button>
      </form>
    </div>
  );
};

export default CarForm;
