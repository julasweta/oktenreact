import React from 'react'
import SubChild1_1 from './SubChild1_1'
import SubChild1_2 from './SubChild1_2'


function Child1() {
    return (
        <div className='child'>
            <h2>Child1</h2>
            <SubChild1_1 />
            <SubChild1_2/>
        </div>
    )
}

export default Child1 
