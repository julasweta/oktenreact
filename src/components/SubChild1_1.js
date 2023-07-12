import React from 'react'
import {useContext} from "react";
import { Context } from '../App';

function SubChild1_1() {
    const {data} = useContext(Context);
  return (
    <div>
        <h2>SubChild1_1</h2>
             {data.map(item=><div key={item}>{item}</div>)}
    </div>
  )
}

export default SubChild1_1
