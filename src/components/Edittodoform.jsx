import React, {useState} from 'react'

function EditTodoform({editTodo, task}) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
        

  return (
    <form className='todofrom' onSubmit={handleSubmit}>
        <input
         type="text" 
         className='todo-input'
         placeholder='Update task'
         value={value}
         onChange={(e)=> setValue(e.target.value)}
          />
        <button type='submit' className='todo-btn'>Update task</button>
    </form>
  )
}
export default EditTodoform