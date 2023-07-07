import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Ship from './Ship';


function Ships() {
    const [ships, setShips] = useState();

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v3/launches/`)
            .then(res => {
                setShips(res.data.filter(item=> item.launch_year !== "2020"));
            })
    }, [])

console.log(ships)
  return (
    <div className='posts'>
       {ships && ships.map(item => <Ship ship={item} key={item.flight_number
}  ></Ship>)}

    </div>
  )
}

export default Ships
