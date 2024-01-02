import React, { useState } from 'react';
import { useTodo, } from '../contexts/TodoContext'
function TodoForm() {
  const [todo, setTodo] = useState('');
  const {addTodo} = useTodo()

  const addFun = (e) => {
    e.preventDefault();
    if (!todo) {
        console.log('first value is not setted')
    } else {
      console.log('vlaue is'+todo)
      addTodo({
      todo,completed:false
      })
      setTodo("")
    }
  }
  return (
    <form className="flex" onSubmit={addFun}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.val)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={addFun}
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm