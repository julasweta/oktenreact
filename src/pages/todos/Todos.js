import React, { useEffect, useState } from 'react'
import { apiService } from '../../services/ApiService';
import Todo from './Todo';

const Todos = () => {
    const [todos, setTodos] = useState();
    const url = `https://jsonplaceholder.typicode.com/todos`;


    useEffect(() => {
        const axiosGet = async () => {
            setTodos(await apiService.handleGet(url));
        };
        axiosGet();
    }, [])

    return (
        <div className='items'>
            {todos && todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </div>
    )
}

export default Todos
