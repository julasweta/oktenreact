import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
  const { episodeName } = useSelector((state) => state.character);
  return (
    <div><h2>{episodeName}</h2></div>
  )
}

export { Header}