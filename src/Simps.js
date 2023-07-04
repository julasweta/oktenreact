import React from 'react'

function Simps({name, surname, age, gender, photo}) {
  return (
    <> <div> name - {name}</div>
    <div> surname -  {surname}</div>
    <div> age - {age}</div>
    <div>gender - {gender}</div>
    <img src={photo} alt='pr'/>
    </>
   
   
  )
}

export default Simps