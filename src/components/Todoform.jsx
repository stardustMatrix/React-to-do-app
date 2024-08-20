import React, {useState} from 'react'

function Todoform({addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);

        setValue("");
    }
        

  return (
    <form className='todofrom' onSubmit={handleSubmit}>
        <input
         type="text" 
         className='todo-input'
         placeholder='enter task'
         value={value}
         onChange={(e)=> setValue(e.target.value)}
          />
        <button type='submit' className='todo-btn'>add task</button>
    </form>
  )
}
export default Todoform