import { useState } from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos,setTodos] = useState([])
  
  /*
  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todolist);
    })
    // Correct! Runs once after render with empty array
  }, []); 
  */

  useEffect(() => {
    fetchTodos(); // Fetch on initial render
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const json = await response.json();
      setTodos(json.todolist);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  
  return (
    <div>
      <CreateTodo fetchTodos={fetchTodos}></CreateTodo>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
