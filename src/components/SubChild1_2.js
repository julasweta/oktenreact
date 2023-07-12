import React from 'react'
import {useContext} from "react";
import { Context } from '../App';



function SubChild1_2() {
    const {data, setData} = useContext(Context);
   
  return (
    <div>
           <h2>SubChild1_2</h2>
   {data.map(item=><div key={item}>{item}</div>)}
   <button onClick={()=> setData([4,5,6])}>Change data 4 5 6</button>
   <hr></hr>
   <button onClick={()=> setData([7,8,9])}>Change data 7 8 9</button>
    </div>
  )
}

export default SubChild1_2
