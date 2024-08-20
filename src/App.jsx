import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    if(input.trim()) {
      setTodo([...todo, input])
      setInput("")
    }
  }

  const removeTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index))
  }

  return (
    <>
    <div className="conatiner">
      <h1 className='title'>Todo App</h1>
      <div className="box">
        <div className="to">
          <input type="text" placeholder='Input New Todo' className='tod' value={input} onChange={(e) => {setInput(e.target.value)}}/>
          <button className='btn' onClick={addTodo} >Add Todo</button>
        </div>
        <h3 className='na'>Available Todo Items</h3>
        <ul>
        {todo.map((todo, index) => (
          <li key={index} className='todo'>
            {todo} <button onClick={() => removeTodo(index)} className='rembtn'>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    <p className='copy'>Copyright © Elphie 2024</p>
    </div>
    </>
  )
}

export default App
