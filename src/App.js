import { useCallback, useState } from "react";
import "./App.css";
import TestUseMemo from "./components/TestUseMemo";
import  useToggle  from "./hook/useToggle";
import { useFetch } from "./hook/useFetch";
import { urls } from "./constants/urls";
import { useArray } from "./hook/useArray";

const App=()=> {
  const [data, setData] = useState(5);

  const [todos, setTodos] = useState(['5 Todo ', '7 Todo']);
  const addTodo = useCallback(() => setTodos([...todos, "New Todo"]), [todos]);



  /* UseToggle */
  const [toggle, toggleValue] = useToggle(true);

  /* UseFetch */
  const posts = useFetch(urls.placeholder.posts);
  const comments = useFetch(urls.placeholder.comments);
  const users = useFetch(urls.placeholder.users);

  /* UseArray */
  const { array, add, remove } = useArray(users);

  const onAddItem = () => {
    add({ id: 1003, name: "Svitlana Horynska" });
  };

  const onRemoveItem = () => {
    remove(1003); 
  };



  return (
    <div className="App">
      <button onClick={() => setData(Math.floor(Math.random() * 100))}>SetData</button>
      <TestUseMemo data={data} todos={todos} addTodo={addTodo} />
      {todos && todos.map((todo, index)=> <div  key={index}>{todo}</div>)}

      <h2>UseToggle</h2>
      <button onClick={toggleValue}> Change Toggle </button>
      <p>state: {toggle ? "true" : "false"}</p>

      <h2>UseFetch</h2>
      <p>posts.length: {posts.length}</p>
      <p>comments.length: {comments.length}</p>
      <p>users.length: {users.length}</p>

      <h2>UseArray</h2>
      <button onClick={()=>onAddItem()}>Add User</button>
      <button onClick={()=>onRemoveItem()}>Remo veUser</button>
      {array && array.map(item=><div key={item.id}>{item.name}</div>)}

    </div>
  );
}

export default App;
