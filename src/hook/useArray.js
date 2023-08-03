import { useEffect, useState } from "react";

export function useArray(value) {
  const [array, setArray] = useState();

  useEffect(() => {
    setArray(value);
  }, []);

  const add = (item) => {
    setArray([...array, item]);
  };

  const remove = (id) => {
    setArray(array.filter((item) => item.id !== id));
  };

  return {
    array,
    add,
    remove,
  };
}
