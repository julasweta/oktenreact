import React from 'react'

const Todo = ({ todo }) => {
    return (
        <div className='item'>
            <h3>{todo.title}</h3>
            <span>todo.completed: {todo.completed ? 'true' : 'false'}</span>
        </div>
    )
}

export default Todo